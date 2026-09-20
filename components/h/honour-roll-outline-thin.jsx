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

.jqxl7db2x {
  d: path("M4 3h16v17l-8 -8 -8 8Z");
}

.tu0fdo1xi {
  d: path("M7 7h10");
}

.uepsd3bvn {
  d: path("M7 10h7");
}
</style><g class="hntgybcog"><path class="jqxl7db2x"/><path class="tu0fdo1xi"/><path class="uepsd3bvn"/></g>`,
		"fallback": "iconmind:honour-roll-outline-thin",
	});
}

export default Component;
