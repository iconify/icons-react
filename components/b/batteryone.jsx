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
		"content": `<style>.om_0qzbij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.5 3.5L14.834 23.481l7.797 3.22l-4.79 17.799l15.323-20.087l-8.174-2.442z");
}
</style><path class="om_0qzbij"/>`,
		"fallback": "arcticons:batteryone",
	});
}

export default Component;
