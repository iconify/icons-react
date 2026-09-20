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

.owdk3hf1a {
  d: path("m18 8 4 4 -4 4");
}

.x26a8iq1c {
  d: path("M2 12h20");
}

.zhh-d14-h {
  d: path("M10.5 5H13a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8l3 -3h2.5");
}
</style><g class="hntgybcog"><path class="zhh-d14-h"/><path class="x26a8iq1c"/><path class="owdk3hf1a"/></g>`,
		"fallback": "iconmind:executor-outline-thin",
	});
}

export default Component;
