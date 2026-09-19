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
		"content": `<style>.uz0any2fg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.064 5.5v37l23.917-12.357v-12.38zm0 24.486l23.917-12.221");
}

.xij0b00-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.981 30.144L18.064 17.736l-12.046 6.17l12.046 6.08");
}
</style><path class="uz0any2fg"/><path class="xij0b00-r"/>`,
		"fallback": "arcticons:delta-exchange-india",
	});
}

export default Component;
