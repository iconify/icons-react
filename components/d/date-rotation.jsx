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
		"content": `<style>.dlcf2fbku {
  d: path("M12.562 19.5H2.5v-13l2-3.5h13l2 3.5v6.838M2.5 6.5h17m-8.5 0v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.o526cq8lq {
  d: path("M20.75 18.5A2.75 2.75 0 1 1 18 15.75");
}
</style><g class="hntgybcog"><path class="dlcf2fbku"/><path class="o526cq8lq"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix:date-rotation",
	});
}

export default Component;
