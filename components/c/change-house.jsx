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
		"content": `<style>.dna3z2pfx {
  d: path("M15.5 18a3 3 0 0 1 6 0Zm1 3h.01m1.99.5h.01m1.99-.5h.01");
}

.gom1yvpoe {
  d: path("M13.7 21.5H2.5v-19h15v9.8M10 2.5v19M7.5 10v2.5m5-2.5v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gom1yvpoe"/><path class="dna3z2pfx"/></g>`,
		"fallback": "uix-sharp:change-house",
	});
}

export default Component;
