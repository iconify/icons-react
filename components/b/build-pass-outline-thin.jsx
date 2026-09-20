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
		"content": `<style>.b0hkzgbgd {
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.njpqp_b0l {
  d: path("m9 10 2 2 4 -4");
}

.wuk2mlziz {
  d: path("M7 19h10");
}
</style><g class="hntgybcog"><path class="b0hkzgbgd"/><path class="njpqp_b0l"/><path class="wuk2mlziz"/></g>`,
		"fallback": "iconmind:build-pass-outline-thin",
	});
}

export default Component;
