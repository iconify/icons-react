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
		"content": `<style>.do6653bbn {
  d: path("M6 21.5v-4h3v4m6 0v-4h3v4m-10.75-9h.01m9.49 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y5nx9-3xq {
  d: path("m2.878 10.523l3-3.79a1.75 1.75 0 0 1 2.744 0l2.006 2.534a1.75 1.75 0 0 0 2.744 0l2.006-2.534a1.75 1.75 0 0 1 2.744 0l3 3.79a1.75 1.75 0 0 1 .378 1.086v8.141a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-8.141a1.75 1.75 0 0 1 .378-1.086M12 11v10.5");
}
</style><g class="hntgybcog"><path class="y5nx9-3xq"/><path class="do6653bbn"/></g>`,
		"fallback": "uix:duplex",
	});
}

export default Component;
