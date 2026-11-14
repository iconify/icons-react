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
		"content": `<style>.r8vtb2cem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 18.75V14m0 1.25c-.1-2.4-1.85-3.8-4.75-3.75c.1 2.4 1.85 3.8 4.75 3.75Zm0-1.25c-.1-2.9 1.65-5 4.5-5c-.05 2.8-1.8 4.9-4.5 5Zm11.25 6V5m-3 3l3-3l3 3");
}
</style><path class="r8vtb2cem"/>`,
		"fallback": "uix-sharp:growth-tracker",
	});
}

export default Component;
