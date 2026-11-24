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
		"content": `<style>.d6jcy2ovj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 11h-8v8a8 8 0 1 1 8-8");
}

.ft5dv1b6b {
  fill: none;
}

.yxcujlzjj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 11a8 8 0 1 0-8 8m0-12v4h3m1 10v-2l4-4l2 2l-4 4Z");
}
</style><g class="ft5dv1b6b"><path class="d6jcy2ovj"/><path class="yxcujlzjj"/></g>`,
		"fallback": "coolicons:clock-edit-duotone-round",
	});
}

export default Component;
