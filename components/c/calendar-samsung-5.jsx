import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kzykk8swa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-4v1a3.5 3.5 0 1 1-7 0v-1h-8v1a3.5 3.5 0 1 1-7 0v-1h-3a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.t-2ow-_5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.1 34.65c1.105.926 2.176 1.35 4.854 1.35h.46a4.485 4.485 0 0 0 4.486-4.485h0a4.486 4.486 0 0 0-4.486-4.486H19.1V20h9.8");
}
</style><path class="t-2ow-_5y"/><path class="kzykk8swa"/>`,
		"fallback": "arcticons:calendar-samsung-5",
	});
}

export default Component;
