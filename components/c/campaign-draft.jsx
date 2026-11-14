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
		"content": `<style>.i61vc0b-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.403 16.607L7.5 13.5h-4v-5h4l9.5-5v9.565M6 13.5l1.5 5m7.5 2.75l.5-2.75l3.75-3.75L21.5 17l-3.75 3.75Z");
}
</style><path class="i61vc0b-b"/>`,
		"fallback": "uix:campaign-draft",
	});
}

export default Component;
