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
		"content": `<style>.hkze39-9y {
  d: path("M4.75 11.25a2.75 1.75 0 1 0 5.5 0a2.75 1.75 0 1 0-5.5 0Zm9 0a2.75 1.75 0 1 0 5.5 0a2.75 1.75 0 1 0-5.5 0ZM11.25 7l-1-1m2.5 1L14 6m-5.25 7.75h6.75M9 16.5h6m-12.5 3c2.5 0 3-3 5.5-3.5");
}

.r6z7n0b3n {
  d: path("M8.5 14.75a3.5 4.75 0 1 0 7 0a3.5 4.75 0 1 0-7 0Z");
}

.u5xcr32hw {
  d: path("M10.5 8.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u5xcr32hw"/><path class="r6z7n0b3n"/><path class="hkze39-9y"/></g>`,
		"fallback": "uix-sharp:bee-flying",
	});
}

export default Component;
