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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cut_arb9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.938 35.5a8.33 8.33 0 0 1-.883-5.223s-3.53-1.36-4.119-2.096s.441-1.802.368-4.046");
}

.gbi3h4bgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.444 22.995c.478.98-2.207 1.324-2.39.147s2.06-2.427 2.17-3.751s1.688-7.503 8.275-6.842c7.687.773 6.804 8.607 6.694 10.041a2.911 2.911 0 0 1-1.545 4.819a8.2 8.2 0 0 0 .037 4.634");
}
</style><circle class="cpk0fnbgt"/><path class="cut_arb9g"/><path class="gbi3h4bgu"/>`,
		"fallback": "arcticons:coin-flip",
	});
}

export default Component;
