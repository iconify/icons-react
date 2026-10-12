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

.uprqat9mu {
  d: path("m8.8 11.81l4.5-.6a1.5 1.5 0 0 1 .4 2.98l-4.5.6a1.5 1.5 0 0 1-.4-2.98");
}

.w83tthbwx {
  d: path("M5.25 14V9.25a1.5 1.5 0 0 1 3 0V8a1.5 1.5 0 0 1 3 0v.25a1.5 1.5 0 0 1 3 0V9a1.5 1.5 0 0 1 3 0v5.5A3.5 3.5 0 0 1 15 17.75v2.75a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 20.5v-2.75A3.75 3.75 0 0 1 5.25 14m3-4.75V10m3-2v1.5m3-1.25V9.5");
}
</style><g class="hntgybcog"><path class="w83tthbwx"/><path class="uprqat9mu"/></g>`,
		"fallback": "iconoven:fist",
	});
}

export default Component;
