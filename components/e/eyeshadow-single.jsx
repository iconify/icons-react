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
		"content": `<style>.as5n6yh8m {
  d: path("M2.5 16.5a9.5 5 0 1 0 19 0a9.5 5 0 1 0-19 0");
}

.hh5jt8scp {
  d: path("M4 7a8 4.5 0 1 0 16 0A8 4.5 0 1 0 4 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uliv79t9i {
  d: path("M7 16.5a5 2 0 1 0 10 0a5 2 0 1 0-10 0");
}
</style><g class="hntgybcog"><path class="hh5jt8scp"/><path class="as5n6yh8m"/><path class="uliv79t9i"/></g>`,
		"fallback": "uix:eyeshadow-single",
	});
}

export default Component;
