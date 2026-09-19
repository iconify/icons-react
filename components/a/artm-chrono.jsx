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
		"content": `<style>.bjqcvvbkj {
  cx: 24px;
  cy: 18.788px;
  r: 9.961px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dceu6bmpt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 18.788v-6.739m0 6.739l3.784 3.784");
}

.qebwyhc6s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.288 18.788C38.288 32.126 24 43.5 24 43.5S9.712 32.126 9.712 18.788C9.712 10.897 16.11 4.5 24 4.5s14.288 6.397 14.288 14.288");
}
</style><path class="qebwyhc6s"/><circle class="bjqcvvbkj"/><path class="dceu6bmpt"/>`,
		"fallback": "arcticons:artm-chrono",
	});
}

export default Component;
