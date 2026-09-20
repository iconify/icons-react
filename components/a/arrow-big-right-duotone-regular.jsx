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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nvjd9lbtc {
  fill: currentColor;
  d: path("m21 12 -9 9v-5H3V8h9V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yg-bsbc2q {
  d: path("m21 12 -9 9v-5H3V8h9V3Z");
}
</style><g class="nrj6p8qat"><path class="nvjd9lbtc"/><path class="yg-bsbc2q"/></g>`,
		"fallback": "iconmind:arrow-big-right-duotone-regular",
	});
}

export default Component;
