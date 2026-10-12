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
		"content": `<style>.gqxll333e {
  d: path("M2.75 9.25a2 2 0 0 1 2-2h3.5l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n6p_w5bjg {
  d: path("M5.75 7.25v-2.5a2 2 0 0 1 2-2H11l2 2h6.25a2 2 0 0 1 2 2V18");
}
</style><g class="hntgybcog"><path class="n6p_w5bjg"/><path class="gqxll333e"/></g>`,
		"fallback": "iconoven:folder-stack",
	});
}

export default Component;
