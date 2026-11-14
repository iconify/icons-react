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
		"content": `<style>.cqq5dub7n {
  d: path("M7.5 8v12.5H5a2 2 0 0 1-2-2V8m7.5 0v12.5h3V8m3 0v12.5H19a2 2 0 0 0 2-2V8M3 14.25h4.5m3 0h3m3 0H21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hvd--9t6q {
  fill: currentColor;
  d: path("M3 8V5.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2V8Z");
}
</style><g class="hntgybcog"><path class="hvd--9t6q"/><path class="cqq5dub7n"/></g>`,
		"fallback": "uix:data-partition",
	});
}

export default Component;
