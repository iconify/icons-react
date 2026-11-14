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
		"content": `<style>.potddqhfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12V9.5a7 7 0 0 1 14 0V12M3 12h4v7H3Zm14 0h4v7h-4ZM5 19q0 2.5 3.5 2.5h3");
}
</style><path class="potddqhfq"/>`,
		"fallback": "uix-sharp:dispatcher-headset",
	});
}

export default Component;
