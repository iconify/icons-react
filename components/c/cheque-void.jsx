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
		"content": `<style>.st4s7lb_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18.5h0v-13H14m7.5 0h0v13H10m-4-9h4m4 5h4m-13.5 6l15-17");
}
</style><path class="st4s7lb_g"/>`,
		"fallback": "uix-sharp:cheque-void",
	});
}

export default Component;
