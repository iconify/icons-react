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

.mld4f3bca {
  d: path("M6.5 8h11a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18v-6.5A3.5 3.5 0 0 1 6.5 8");
}

.zjx5jubuu {
  d: path("M6.25 14.75a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0M17.5 11.5h.01M17.5 15v3M8 6C7 4.75 9 3.75 8 2.5M12 6c-1-1.25 1-2.25 0-3.5M16 6c-1-1.25 1-2.25 0-3.5");
}
</style><g class="hntgybcog"><path class="mld4f3bca"/><path class="zjx5jubuu"/></g>`,
		"fallback": "uix:autoclave",
	});
}

export default Component;
