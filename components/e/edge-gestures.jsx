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
		"content": `<style>.bbwroj02y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.192 42.387l6.167.057V5.5H7.193m33.616.113l-6.168-.057V42.5h6.168");
}
</style><path class="bbwroj02y"/>`,
		"fallback": "arcticons:edge-gestures",
	});
}

export default Component;
