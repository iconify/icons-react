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
		"content": `<style>.o63492zof {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8.5h2a5 5 0 0 1 10 0h2Zm3.5 0V10a3.5 3.5 0 0 0 7 0V8.5m-11 12c0-2.5 3.25-4.25 7.5-4.25s7.5 1.75 7.5 4.25");
}
</style><path class="o63492zof"/>`,
		"fallback": "uix-sharp:engineer",
	});
}

export default Component;
