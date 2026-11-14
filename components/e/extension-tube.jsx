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
		"content": `<style>.fmabdia2m {
  d: path("M11 3.5a4 8.5 0 0 1 0 17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.isnc3mibt {
  d: path("M2.5 12a4 8.5 0 1 0 8 0a4 8.5 0 1 0-8 0");
}

.vfhyzoiuw {
  d: path("M6.5 3.5h11a4 8.5 0 0 1 0 17h-11");
}
</style><g class="hntgybcog"><path class="isnc3mibt"/><path class="vfhyzoiuw"/><path class="fmabdia2m"/></g>`,
		"fallback": "uix:extension-tube",
	});
}

export default Component;
