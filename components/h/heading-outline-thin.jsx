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

.mpjdm200q {
  d: path("M6 4v16");
}

.tkeq0bpvv {
  d: path("M18 4v16");
}

.vslz5yb3q {
  d: path("M6 12h12");
}
</style><g class="hntgybcog"><path class="mpjdm200q"/><path class="tkeq0bpvv"/><path class="vslz5yb3q"/></g>`,
		"fallback": "iconmind:heading-outline-thin",
	});
}

export default Component;
