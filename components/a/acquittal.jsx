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
		"content": `<style>.bth30-b3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.227 6.409l3.182-3.182l6.364 6.364l-3.182 3.182ZM12.5 9.5l-8 8m10.25.5l2 2L21 15.75");
}
</style><path class="bth30-b3s"/>`,
		"fallback": "uix-sharp:acquittal",
	});
}

export default Component;
