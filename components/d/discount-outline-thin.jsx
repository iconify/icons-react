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

.ji-xh3b0v {
  d: path("M8 10.5v3");
}

.lh7nxd5dq {
  d: path("M3 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.p8a31xr4o {
  d: path("M16 12h6");
}
</style><g class="hntgybcog"><path class="lh7nxd5dq"/><path class="ji-xh3b0v"/><path class="p8a31xr4o"/></g>`,
		"fallback": "iconmind:discount-outline-thin",
	});
}

export default Component;
