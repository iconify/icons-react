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

.mgk_s2frb {
  d: path("M7 2.5v14c0 2.75 2.25 5 5 5s5-2.25 5-5v-14");
}

.yskg-rb0r {
  d: path("M12 17.5V13L9.75 9.5M12 13l2.25-3.5");
}
</style><g class="hntgybcog"><path class="mgk_s2frb"/><path class="yskg-rb0r"/></g>`,
		"fallback": "uix:antibody-test",
	});
}

export default Component;
