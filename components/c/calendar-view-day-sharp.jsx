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
		"content": `<style>.xl1-ijbaw {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4V7h18v10zM3 5V3h18v2z");
}
</style><path class="xl1-ijbaw"/>`,
		"fallback": "material-symbols:calendar-view-day-sharp",
	});
}

export default Component;
