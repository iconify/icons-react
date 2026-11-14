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
		"content": `<style>.m1ra8zh5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5V18M3 7.5h15q.098 0 .196.01q.098.009.194.028q.097.02.191.048q.094.029.184.066q.091.038.178.084q.086.046.168.101t.158.117t.145.132t.132.145q.062.076.117.158t.101.168t.084.178q.037.09.066.184q.028.094.048.191q.019.096.028.194T20 9.5v1.772m-1.672.228H3M5.5 4H10v3.5H5.5ZM15 16.25h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}
</style><path class="m1ra8zh5b"/>`,
		"fallback": "uix-sharp:change-bed-sheets",
	});
}

export default Component;
