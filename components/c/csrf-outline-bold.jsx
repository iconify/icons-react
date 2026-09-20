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
		"content": `<style>.l4i2yo_dl {
  d: path("M15 4h5v8l-8 8 -8 -8V4h5Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tuabbzxqz {
  d: path("m9 11 3 3 5 -5");
}
</style><g class="s0phu2bbs"><path class="l4i2yo_dl"/><path class="tuabbzxqz"/></g>`,
		"fallback": "iconmind:csrf-outline-bold",
	});
}

export default Component;
