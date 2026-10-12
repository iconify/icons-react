import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xfmthrc2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.16 14.1a3.02 3.02 0 0 1-.41-6.02a4.35 4.35 0 0 1 8.05-1.04a3.4 3.4 0 0 1-.45 7.06ZM4.84 8.67a2.5 2.5 0 0 1 2.97-3.11M3.5 8h-.75M4.6 5.35l-.53-.53m3.18-.57V3.5m6.5 13.25l-2.25 2.5h3.25l-2 2");
}
</style><path class="xfmthrc2y"/>`,
		"fallback": "iconoven:cloud-sun-lightning",
	});
}

export default Component;
