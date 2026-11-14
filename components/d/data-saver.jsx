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

.j-kanxclm {
  d: path("M8.75 12.25L12 15.5l3.25-3.25");
}

.xl3y4sj2q {
  d: path("m12 2.5l7.5 3V11c0 5-3 8.5-7.5 10.5c-4.5-2-7.5-5.5-7.5-10.5V5.5Zm0 5v8");
}
</style><g class="hntgybcog"><path class="xl3y4sj2q"/><path class="j-kanxclm"/></g>`,
		"fallback": "uix:data-saver",
	});
}

export default Component;
