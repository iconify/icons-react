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
		"content": `<style>.cvxmfgb-s {
  d: path("M20.25 3.75v4.5h-4.5m-8.25 2l1.5-1v5.5m5.5-5.5a1.5 1.5 0 0 1 1.5 1.5v2.5a1.5 1.5 0 0 1-3 0v-2.5a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kk_gz9o8o {
  d: path("M20.25 12a8.25 8.25 0 1 1-2.42-5.83l2.42 2.08");
}
</style><g class="hntgybcog"><path class="kk_gz9o8o"/><path class="cvxmfgb-s"/></g>`,
		"fallback": "iconoven:forward-10",
	});
}

export default Component;
