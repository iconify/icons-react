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
		"content": `<style>.crp-16bgl {
  d: path("M14 3h5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V6a3 3 0 0 1 3 -3h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n7epx7dso {
  d: path("M13.5 6.5 16 9l-4 4 -4 -4 2.5 -2.5");
}

.yomctlb4k {
  d: path("M7 17v4l4 -4");
}
</style><g class="hntgybcog"><path class="crp-16bgl"/><path class="yomctlb4k"/><path class="n7epx7dso"/></g>`,
		"fallback": "iconmind:hyde-outline-thin",
	});
}

export default Component;
