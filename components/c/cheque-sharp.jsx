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
		"content": `<style>.he8i02bwr {
  d: path("M2.75 5.75h18.5v12.5H2.75zm3.5 4h5.5m3.25 0h2.75m-11.5 4.5h3");
}

.q4_qghbet {
  d: path("m12.75 14.75l1.5-2l1.25 2l1.5-2l1.25 2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="he8i02bwr"/><path class="q4_qghbet"/></g>`,
		"fallback": "iconoven:cheque-sharp",
	});
}

export default Component;
