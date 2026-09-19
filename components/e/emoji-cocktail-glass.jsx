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
		"content": `<style>.m5x40zbje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.67 9.611l-7.335 9.69L24 28.993l-7.335-9.69l-7.196-9.506m15.168 5.138h9.73m-20.904 0h11.174M24 28.992V42.5m-9.39 0h18.78M9.47 9.796l-.14-.185m16.43 7.048L35.15 5.5");
}
</style><path class="m5x40zbje"/>`,
		"fallback": "arcticons:emoji-cocktail-glass",
	});
}

export default Component;
