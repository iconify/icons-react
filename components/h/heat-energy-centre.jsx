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
		"content": `<style>.ovvicntxu {
  d: path("M6 21.5V17h3.5v4.5");
}

.rec4hebat {
  d: path("M2.5 21.5V12l5-3.5V12l5-3.5V12h1V3.5H16V12h2.75V6h2.75v15.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rec4hebat"/><path class="ovvicntxu"/></g>`,
		"fallback": "uix-sharp:heat-energy-centre",
	});
}

export default Component;
