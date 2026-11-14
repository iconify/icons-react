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
		"content": `<style>.u8j490b7n {
  d: path("m15.25 6.25l2 2l2-2m-6.25 8h8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wux2vybcj {
  d: path("m3 21l1.25-8h3.5L9 21Zm10-10h8.5v10H13Zm-7-.75q-1.5-2 0-4m3-.75C11.5 3 16.5 3 17.25 8.25");
}
</style><g class="ulnmmdpxh"><path class="wux2vybcj"/><path class="u8j490b7n"/></g>`,
		"fallback": "uix-sharp:carbon-capture",
	});
}

export default Component;
