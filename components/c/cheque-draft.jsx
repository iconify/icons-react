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
		"content": `<style>.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.o_y3pbzrg {
  d: path("m5 9.5l2.5-1.75L10 9.5m-4 0V12m3-2.5V12m-4 0h5m3.75-4.25h5V11h-5ZM5.5 15.5h4m3 0h6.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="o_y3pbzrg"/></g>`,
		"fallback": "uix-sharp:cheque-draft",
	});
}

export default Component;
