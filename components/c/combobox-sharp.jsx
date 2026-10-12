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
		"content": `<style>.a41ar10ql {
  d: path("m14.75 11l2 2l2-2");
}

.ssngo0btg {
  d: path("M2.75 7h18.5v10H2.75zm3.5 5h6.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ssngo0btg"/><path class="a41ar10ql"/></g>`,
		"fallback": "iconoven:combobox-sharp",
	});
}

export default Component;
