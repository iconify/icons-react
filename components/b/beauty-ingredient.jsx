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
		"content": `<style>.dx8ezjeyu {
  d: path("M9.5 2.5v6L4.25 19q-.75 2 1.5 2h12.5q2.25 0 1.5-2L14.5 8.5v-6M8 2.5h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ir5nh7z0m {
  d: path("M9.5 18.25Q9.5 14 14 14q0 4.25-4.5 4.25");
}
</style><g class="hntgybcog"><path class="dx8ezjeyu"/><path class="ir5nh7z0m"/></g>`,
		"fallback": "uix:beauty-ingredient",
	});
}

export default Component;
