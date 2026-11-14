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
		"content": `<style>.crjamgbxq {
  d: path("M15.25 12L17 13.75l3-3");
}

.nn0q31bsu {
  d: path("M13 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.te6a92q0t {
  d: path("M4 12h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xxus4vz2n {
  fill: currentColor;
  d: path("M2.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="te6a92q0t"/><path class="xxus4vz2n"/><path class="nn0q31bsu"/><path class="crjamgbxq"/></g>`,
		"fallback": "uix-sharp:application-tracking",
	});
}

export default Component;
