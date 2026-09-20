import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aap6mqbnn {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4V7h18v10zm2-2h14V9H5zM3 5V3h18v2zm2 10V9z");
}
</style><path class="aap6mqbnn"/>`,
		"fallback": "material-symbols:calendar-view-day-outline-sharp",
	});
}

export default Component;
