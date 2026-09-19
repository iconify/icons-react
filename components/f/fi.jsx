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
		"content": `<style>.bfrydubaa {
  cx: 27.97px;
  cy: 16.163px;
  r: 1.663px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}

.og7ovw1sl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.97 24v4.75a4.75 4.75 0 0 0 4.75 4.75M15.28 24H24m-8.72 9.5V19.25a4.75 4.75 0 0 1 4.75-4.75H24");
}
</style><path class="ll0g54h-q"/><circle class="bfrydubaa"/><path class="og7ovw1sl"/>`,
		"fallback": "arcticons:fi",
	});
}

export default Component;
