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
		"content": `<style>.dbvhpcc_p {
  d: path("M9 10h6v5H9Z");
}

.etq9du57q {
  d: path("M4 3h16v3.5H4Zm1 3.5L7 21h10l2-14.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="etq9du57q"/><path class="dbvhpcc_p"/></g>`,
		"fallback": "uix-sharp:cup-name-label",
	});
}

export default Component;
