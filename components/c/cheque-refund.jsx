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
		"content": `<style>.txdf6pbob {
  d: path("M17.5 15.5L15 18l2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zrccxbbsb {
  d: path("M11.6 18.5H2.5v-13h19v9.7m-19-5.7h19M6 9.5h5m-5 5h3.5M21 18h-6");
}
</style><g class="ulnmmdpxh"><path class="zrccxbbsb"/><path class="txdf6pbob"/></g>`,
		"fallback": "uix-sharp:cheque-refund",
	});
}

export default Component;
