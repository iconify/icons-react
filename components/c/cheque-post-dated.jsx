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
		"content": `<style>.rmc_i37hv {
  d: path("M18.5 15.5L21 18l-2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z15dg-bfx {
  d: path("M12.2 18.5H2.5v-13h19v9.1M6 9.5h5.5m-5.5 5h3.5M15 18h6");
}
</style><g class="ulnmmdpxh"><path class="z15dg-bfx"/><path class="rmc_i37hv"/></g>`,
		"fallback": "uix-sharp:cheque-post-dated",
	});
}

export default Component;
