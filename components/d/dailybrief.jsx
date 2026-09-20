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
		"content": `<style>.lu25s2bzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.332 6.288c-6.377 3.682-8.562 11.837-4.88 18.215a13.34 13.34 0 0 0 8.106 6.182l-1.438 5.367l11.548-6.667c6.378-3.683 8.563-11.838 4.88-18.216S23.71 2.605 17.331 6.286m13.337 27.658L19.12 40.611m7.6.171l-4.71 2.719");
}
</style><path class="lu25s2bzh"/>`,
		"fallback": "arcticons:dailybrief",
	});
}

export default Component;
