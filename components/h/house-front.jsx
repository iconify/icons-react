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
		"content": `<style>.c5m4p6far {
  d: path("M5 9.5v11h14v-11");
}

.fopze3b4l {
  d: path("M10 20.5V15h4v5.5m-3.5-10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z6zf6db1g {
  d: path("m2.5 11.5l9.5-8l9.5 8");
}
</style><g class="hntgybcog"><path class="z6zf6db1g"/><path class="c5m4p6far"/><path class="fopze3b4l"/></g>`,
		"fallback": "uix:house-front",
	});
}

export default Component;
