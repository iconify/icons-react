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

.vni3pi4oq {
  d: path("M2.5 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.zr7bvmb3q {
  d: path("M5.25 12.25L7 14l2.75-3.5M16 12h5.5");
}
</style><g class="ulnmmdpxh"><path class="vni3pi4oq"/><path class="zr7bvmb3q"/></g>`,
		"fallback": "uix-sharp:checkbox-round",
	});
}

export default Component;
