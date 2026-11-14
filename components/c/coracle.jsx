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
		"content": `<style>.nsujomb8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5H16a6.75 6.75 0 0 1-13.5 0Zm17.5-9V14m-1.5 0h3v7.5h-3Z");
}
</style><path class="nsujomb8e"/>`,
		"fallback": "uix-sharp:coracle",
	});
}

export default Component;
