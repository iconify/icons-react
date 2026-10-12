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

.of4kfwcob {
  d: path("M2.75 6.25a2.5 2.5 0 0 1 2.5-2.5h13.5a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5H12.5L8 20.85a.77.77 0 0 1-1.25-.6v-2.5h-1.5a2.5 2.5 0 0 1-2.5-2.5Z");
}

.zkjk2-bra {
  d: path("M9.25 7.5a.75.75 0 0 1 .75-.75h2.75l2 2V14a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75Zm3.25-.75V9h2.25");
}
</style><g class="hntgybcog"><path class="of4kfwcob"/><path class="zkjk2-bra"/></g>`,
		"fallback": "iconoven:file-comment",
	});
}

export default Component;
