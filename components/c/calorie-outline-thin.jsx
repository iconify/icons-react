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
		"content": `<style>.a0lcnrc-j {
  d: path("M18 16a6 6 0 0 1 -12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hthehj4ml {
  d: path("M12 3c1.5 3 4 4 4 7a4 4 0 1 1 -8 0c0 -2.5 2 -3 2 -4.5 0.5 1 2 1 2 -2.5");
}

.u4sowhi7h {
  d: path("M4 16h16");
}
</style><g class="hntgybcog"><path class="hthehj4ml"/><path class="u4sowhi7h"/><path class="a0lcnrc-j"/></g>`,
		"fallback": "iconmind:calorie-outline-thin",
	});
}

export default Component;
