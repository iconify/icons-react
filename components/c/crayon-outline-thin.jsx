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
		"content": `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j5baogbem {
  d: path("M8 11h8");
}

.o47um4vmm {
  d: path("M8 21V9l4 -4 4 4v12Z");
}
</style><g class="hntgybcog"><path class="o47um4vmm"/><path class="j5baogbem"/><path class="c4khiwgvb"/></g>`,
		"fallback": "iconmind:crayon-outline-thin",
	});
}

export default Component;
