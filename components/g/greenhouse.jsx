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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k_tw80b1o {
  d: path("M2.75 21.25V12a9.25 9.25 0 0 1 18.5 0v9.25ZM7 4.25v17m10-17v17");
}

.kwl8nky0k {
  d: path("M10 21.25v-4.5a2 2 0 0 1 4 0v4.5");
}
</style><g class="hntgybcog"><path class="k_tw80b1o"/><path class="kwl8nky0k"/></g>`,
		"fallback": "iconoven:greenhouse",
	});
}

export default Component;
