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
		"content": `<style>.omi9hj5dw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.435 8.895a3.395 3.395 0 0 1 6.79 0m1.185 29.532c-.249 1.526-.842 4.057-4.24 4.073s-3.893-2.571-4.244-4.074");
}

.wu2xx-vqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.09 38.427s-1.399-2.558-2.21-6.508c-.918-4.47-1.276-10.533-1.525-13.18c-.527-5.6-4.56-10.184-10.185-10.184h-.34c-5.625 0-9.658 4.584-10.185 10.183c-.249 2.648-.606 8.711-1.525 13.18c-.811 3.952-2.21 6.509-2.21 6.509z");
}
</style><path class="omi9hj5dw"/><path class="wu2xx-vqr"/>`,
		"fallback": "arcticons:emoji-bell",
	});
}

export default Component;
