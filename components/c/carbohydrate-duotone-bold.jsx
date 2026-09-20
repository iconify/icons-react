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
		"content": `<style>.cbe4yor0z {
  d: path("M5 20v-9a4 4 0 0 1 4 -4h6a4 4 0 0 1 4 4v9Z");
}

.jqdvcpneq {
  fill: currentColor;
  d: path("M5 20v-9a4 4 0 0 1 4 -4h6a4 4 0 0 1 4 4v9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="jqdvcpneq"/><path class="cbe4yor0z"/></g>`,
		"fallback": "iconmind:carbohydrate-duotone-bold",
	});
}

export default Component;
