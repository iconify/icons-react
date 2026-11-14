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
		"content": `<style>.gfop0pw6r {
  d: path("M4.5 4.5h15a2 2 0 0 1 2 2v10l-3 3h-14a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s_tfcz39x {
  d: path("M21.5 16.5q-2.75-.25-3 3M13.061 8.561l2.378 2.378a1.5 1.5 0 0 1 0 2.122l-2.378 2.378a1.5 1.5 0 0 1-2.122 0l-2.378-2.378a1.5 1.5 0 0 1 0-2.122l2.378-2.378a1.5 1.5 0 0 1 2.122 0M12 12h.01");
}
</style><g class="hntgybcog"><path class="gfop0pw6r"/><path class="s_tfcz39x"/></g>`,
		"fallback": "uix:carpet-persian",
	});
}

export default Component;
