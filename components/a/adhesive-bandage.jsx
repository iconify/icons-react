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
		"content": `<style>.hkcqb-jro {
  d: path("m5.282 13.768l8.486-8.486a3.5 3.5 0 0 1 4.95 0a3.5 3.5 0 0 1 0 4.95l-8.486 8.486a3.5 3.5 0 0 1-4.95 0a3.5 3.5 0 0 1 0-4.95");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.llhffjb9y {
  d: path("m8.111 10.939l2.828-2.828a1.5 1.5 0 0 1 2.122 0l2.828 2.828a1.5 1.5 0 0 1 0 2.122l-2.828 2.828a1.5 1.5 0 0 1-2.122 0l-2.828-2.828a1.5 1.5 0 0 1 0-2.122");
}
</style><g class="hntgybcog"><path class="hkcqb-jro"/><path class="llhffjb9y"/></g>`,
		"fallback": "uix:adhesive-bandage",
	});
}

export default Component;
