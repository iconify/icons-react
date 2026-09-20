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

.r44xlibns {
  d: path("M12 10v6m-3 0 6 -6");
}

.uweslxo3x {
  d: path("M12 3.5 21.5 20h-19Z");
}
</style><g class="hntgybcog"><path class="uweslxo3x"/><path class="r44xlibns"/></g>`,
		"fallback": "iconmind:black-ice-outline-thin",
	});
}

export default Component;
