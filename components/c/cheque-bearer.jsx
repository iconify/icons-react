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
		"content": `<style>.ekf2s55jf {
  d: path("M2.5 15H6l4 2.5h4.25a1.25 1.25 0 0 1 0 2.5H9.5");
}

.u7q6sf-mj {
  d: path("M2.5 21.5H13l7.25-4.75c1-.75.25-2.25-1-1.75l-3.75 2.5m-11-14h15v9h-15Zm3 3.25H12m-4.5 2.5H10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ekf2s55jf"/><path class="u7q6sf-mj"/></g>`,
		"fallback": "uix-sharp:cheque-bearer",
	});
}

export default Component;
