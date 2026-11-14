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
		"content": `<style>.bbyz6c45c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8C5 9 8 9 10.25 9v2.75C10.25 13.75 9 15 7 15h-.5c-2 0-3.25-1.5-3.5-3.5Zm19 0C19 9 16 9 13.75 9v2.75c0 2 1.25 3.25 3.25 3.25h.5c2 0 3.25-1.5 3.5-3.5Zm-11.25 2.25c.75-.75 2.75-.75 3.5 0");
}
</style><path class="bbyz6c45c"/>`,
		"fallback": "uix:cat-eye-glasses",
	});
}

export default Component;
