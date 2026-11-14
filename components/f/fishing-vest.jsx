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
		"content": `<style>.ed401h-uq {
  d: path("M7.75 12za1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m8.5 0za1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m-10 5.5h3m5.5 0h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jzk8b7bok {
  d: path("M8.5 3L11 9v12H5.5a1 1 0 0 1-1-1V6Zm7 0L13 9v12h5.5a1 1 0 0 0 1-1V6Z");
}
</style><g class="hntgybcog"><path class="jzk8b7bok"/><path class="ed401h-uq"/></g>`,
		"fallback": "uix:fishing-vest",
	});
}

export default Component;
