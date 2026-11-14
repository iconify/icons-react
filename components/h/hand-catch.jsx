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
		"content": `<style>.cie6bl0il {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h13c3 0 6-1.5 6-3.5c0-1-1-1.25-2-1.25h-9l-2-3.25a1.25 1.25 0 0 0-2.25.75l.5 2.5H2.5M11 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><path class="cie6bl0il"/>`,
		"fallback": "uix:hand-catch",
	});
}

export default Component;
