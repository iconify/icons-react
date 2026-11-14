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

.lhzb10pgu {
  d: path("M12 17c-1.5 0-2 2.5-2 4.5h4c0-2-.5-4.5-2-4.5");
}

.o1z2wccdo {
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.tfgsrm7_e {
  d: path("M8.5 4.5a3.5 2.5 0 1 0 7 0a3.5 2.5 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="tfgsrm7_e"/><path class="o1z2wccdo"/><path class="lhzb10pgu"/></g>`,
		"fallback": "uix:bag-charm",
	});
}

export default Component;
