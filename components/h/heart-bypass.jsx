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
		"content": `<style>.b_jn1abhn {
  d: path("M11 9.25v-2.5c0-2 1.5-3 3.25-3c1.035 0 1.982.35 2.584 1.049M12.5 4.5l-.5-2m2.25 1.25V2M16 4l.5-1.75m1 5.25C21.75 10 21.25 17 14.25 19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k4197bbdr {
  d: path("M17 10.5c1.5 2 .75 5-3.25 6");
}

.px-uwhbcb {
  d: path("M14.834 8.461c-1.37.351-2.602.789-3.834.789L8 9c-3.5.5-5 4-4.5 7C4 18.5 5 20.5 6 21c.935.467 3.181-.376 5.512-1.305");
}
</style><g class="hntgybcog"><path class="px-uwhbcb"/><path class="b_jn1abhn"/><path class="k4197bbdr"/></g>`,
		"fallback": "uix:heart-bypass",
	});
}

export default Component;
