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

.k_1xvdb8l {
  d: path("M2.5 5a4 1.75 0 1 0 8 0a4 1.75 0 1 0-8 0");
}

.kfaa7ibyr {
  d: path("M2.5 5v8a4 1.75 0 0 0 8 0V5m3 0a4 1.75 0 1 0 8 0a4 1.75 0 1 0-8 0");
}

.o5v09ccth {
  d: path("M13.5 5v8a4 1.75 0 0 0 8 0V5M4 19.5h16m-14-2l-2 2l2 2m12-4l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="k_1xvdb8l"/><path class="kfaa7ibyr"/><path class="o5v09ccth"/></g>`,
		"fallback": "uix:database-compare",
	});
}

export default Component;
