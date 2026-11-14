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
		"content": `<style>.dv-emcc8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5h18m-18 15h18m-14 0V14m5 6.5V10m5 10.5v-15");
}
</style><path class="dv-emcc8v"/>`,
		"fallback": "uix-sharp:data-limit",
	});
}

export default Component;
