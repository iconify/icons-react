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
		"content": `<style>.fugz9obys {
  d: path("m10.152 5.36l.619.885a1.5 1.5 0 0 0 2.458 0l.619-.885A1.5 1.5 0 0 0 12.619 3h-1.238a1.5 1.5 0 0 0-1.229 2.36M12 8.5l-1.5 2l1 1.5l-1 6l1.5 1.5l1.5-1.5l-1-6l1-1.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.piuekebvo {
  d: path("M8.5 3L3 5.5L2 10l3.5 1L6 9.5V21h12V9.5l.5 1.5l3.5-1l-1-4.5L15.5 3");
}
</style><g class="hntgybcog"><path class="piuekebvo"/><path class="fugz9obys"/></g>`,
		"fallback": "uix:category-mens-fashion",
	});
}

export default Component;
