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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ync5iqc-m {
  d: path("M3 3h18v18H3Zm12 0v18M3 15h18M9 15v6m6-12h6");
}

.zqlbdabyb {
  d: path("M3.75 3.75h10.5v10.5H3.75Z");
}
</style><g class="ulnmmdpxh"><path class="ync5iqc-m"/><path class="zqlbdabyb"/></g>`,
		"fallback": "uix-sharp:cell-range",
	});
}

export default Component;
