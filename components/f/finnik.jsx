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
		"content": `<style>.c44nzlb-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.425 34.5V18.825c0-1.836 1.584-3.325 3.54-3.325c1.74 0 2.828.485 3.574 1.39m-10.114 5.022h7");
}

.gw-qcq2-y {
  cx: 38.875px;
  cy: 21.862px;
  r: 0.75px;
  fill: currentColor;
}

.qnf1u_bms {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.925 25.25v9.25m-20-29v37h-6.5c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4z");
}
</style><path class="c44nzlb-d"/><circle class="gw-qcq2-y"/><path class="qnf1u_bms"/>`,
		"fallback": "arcticons:finnik",
	});
}

export default Component;
