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
		"content": `<style>.wq5-t-pjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.25 8.5l-1.5 12.25m6.5-12.25l-1.5 12.25M4 12.25h10.5M3.25 17h10.5m.75-7.5L17.75 6l1.75 1.75L21.25 6m-3.5-2.25h3v3");
}
</style><path class="wq5-t-pjc"/>`,
		"fallback": "iconoven:hashtag-up",
	});
}

export default Component;
