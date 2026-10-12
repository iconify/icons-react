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

.kzrx_nbot {
  d: path("M12 6.75c2.5 2.25 3.75 4.25 3.75 6.5a3.75 3.75 0 0 1-7.5 0c0-1.5.75-2.75 1.75-3.75q.375 1.875 1.5 2.25c0-2 .25-3.5.5-5");
}

.yms02xb-d {
  d: path("m13.59 3.84l6.57 6.57q1.59 1.59 0 3.18l-6.57 6.57q-1.59 1.59-3.18 0l-6.57-6.57q-1.59-1.59 0-3.18l6.57-6.57q1.59-1.59 3.18 0");
}
</style><g class="hntgybcog"><path class="yms02xb-d"/><path class="kzrx_nbot"/></g>`,
		"fallback": "iconoven:hazard-flammable",
	});
}

export default Component;
