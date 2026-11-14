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
		"content": `<style>.t07vbcb6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v19h-15Zm7.5 0v19m-4.5-14h9m-9 4.5h9m-9 4.5h9");
}
</style><path class="t07vbcb6p"/>`,
		"fallback": "uix-sharp:battery-cabinet",
	});
}

export default Component;
