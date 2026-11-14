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
		"content": `<style>.gyrjlccen {
  d: path("M3 7a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm5.75 3.75h6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kfoghmsbx {
  d: path("M9.5 10.75v4.75a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4.75");
}
</style><g class="hntgybcog"><path class="gyrjlccen"/><path class="kfoghmsbx"/></g>`,
		"fallback": "uix:folder-archive",
	});
}

export default Component;
