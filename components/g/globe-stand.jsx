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

.nuw0c_b9t {
  d: path("M16.8 3.68a8.25 8.25 0 0 1-9.42 13.46m4.12 1.11v3m-3.5 0h7");
}

.pxuq53uoo {
  cx: 11.5px;
  cy: 10px;
  r: 5.75px;
}

.vslm1fbnj {
  d: path("M5.75 10h11.5M11.5 4.25C10 6 9.25 7.85 9.25 10s.75 4 2.25 5.75");
}
</style><g class="hntgybcog"><circle class="pxuq53uoo"/><path class="vslm1fbnj"/><path class="nuw0c_b9t"/></g>`,
		"fallback": "iconoven:globe-stand",
	});
}

export default Component;
