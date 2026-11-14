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
		"content": `<style>.ubv45mb7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 6.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m-4.75 15V19c0-3.5 3.5-6 8.5-6s8.5 2.5 8.5 6v2.5Zm8.5-5.75v3.5m-1.75-1.75h3.5");
}
</style><path class="ubv45mb7s"/>`,
		"fallback": "uix:first-responder",
	});
}

export default Component;
