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
		"content": `<style>.gto3ysb9o {
  d: path("M11.25 2.5h1.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 12.75 6h-1.5A1.75 1.75 0 0 1 9.5 4.25a1.75 1.75 0 0 1 1.75-1.75M8.5 6h7L18 18v3H6v-3ZM6 18h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yk8_9ibvi {
  d: path("M12 9.5c1.75 2.25 2 3 2 3.75a2 2 0 0 1-4 0c0-.75.25-1.5 2-3.75");
}
</style><g class="hntgybcog"><path class="gto3ysb9o"/><path class="yk8_9ibvi"/></g>`,
		"fallback": "uix:gel-tube",
	});
}

export default Component;
