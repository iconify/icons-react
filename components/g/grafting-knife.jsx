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
		"content": `<style>.ct-ahl7uc {
  d: path("m9 12.5l-6 6A1.75 1.75 0 0 0 5.5 21l6-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbnftuf_j {
  d: path("M9 12.5L17.5 4c1.5-1.5 4-1 3.5 1.5c-1 4.5-5 8-9.5 9.5Z");
}
</style><g class="hntgybcog"><path class="ct-ahl7uc"/><path class="wbnftuf_j"/></g>`,
		"fallback": "uix:grafting-knife",
	});
}

export default Component;
