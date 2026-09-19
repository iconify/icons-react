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
		"content": `<style>.xhm3jthbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.07 37.76a2.25 2.25 0 0 1-3.17 0L4.5 26.37l3.17-3.17l9.81 9.8l22.85-22.84l3.17 3.17Z");
}
</style><path class="xhm3jthbo"/>`,
		"fallback": "arcticons:everdo",
	});
}

export default Component;
