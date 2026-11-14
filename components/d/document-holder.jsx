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
		"content": `<style>.cian-gyut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 15.5V4a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 17 4v11.5m-12 0h14m-7 0l3 6m-7.5 0H18m-8.25-15h4.5m-4.5 4H13");
}
</style><path class="cian-gyut"/>`,
		"fallback": "uix-sharp:document-holder",
	});
}

export default Component;
