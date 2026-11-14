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
		"content": `<style>.cnabnks_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9.5h15l-1.75 11H6.25Zm0 0a7.5 7.5 0 0 1 15 0m-12.25 4h9.5");
}
</style><path class="cnabnks_c"/>`,
		"fallback": "uix-sharp:car-wash-bucket",
	});
}

export default Component;
