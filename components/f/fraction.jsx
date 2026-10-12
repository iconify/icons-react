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

.n59umob5g {
  d: path("M4.25 12h15.5");
}

.rtveezhbv {
  width: 5.5px;
  height: 5.5px;
  x: 9.25px;
  y: 15.75px;
  rx: 1.5px;
}

.tiokm7swg {
  width: 5.5px;
  height: 5.5px;
  x: 9.25px;
  y: 2.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="tiokm7swg"/><path class="n59umob5g"/><rect class="rtveezhbv"/></g>`,
		"fallback": "iconoven:fraction",
	});
}

export default Component;
