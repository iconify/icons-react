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
		"content": `<style>.klj1k5byh {
  d: path("M4.17 14.83a4 4 0 0 1 0 -5.66");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oayjtvtuh {
  d: path("M8 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.x_i-jbbeq {
  fill: currentColor;
  d: path("M8 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yxwimoiqt {
  d: path("M19.83 9.17a4 4 0 0 1 0 5.66");
}
</style><g class="nrj6p8qat"><path class="x_i-jbbeq"/><path class="oayjtvtuh"/><path class="yxwimoiqt"/><path class="klj1k5byh"/></g>`,
		"fallback": "iconmind:haptic-duotone-regular",
	});
}

export default Component;
