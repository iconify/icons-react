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
		"content": `<style>.lq-f5-n-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4 24h11.332m-1.199.006h6.252l2.259-8.43l3.991 14.897l1.735-6.476s1.846-3.883 4.088 0h11.484");
}

.mq6x3qbem {
  cx: 28.434px;
  cy: 24px;
  r: 15.566px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="mq6x3qbem"/><path class="lq-f5-n-k"/>`,
		"fallback": "arcticons:caffeine-health",
	});
}

export default Component;
