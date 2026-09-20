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
		"content": `<style>.rhw65eb3q {
  fill: currentColor;
  d: path("M3 21V3h3V1h2v2h8V1h2v2h3v18zm16-2V5H5v14zM9 17h1.5v-4q.65-.175 1.075-.712T12 11.075V7h-1v3.775h-.75V7h-1v3.775H8.5V7h-1v4.075q0 .675.425 1.213T9 13zm6 0h1.5V7q-1.25 0-2.125.875T13.5 10v3H15zM5 19V5z");
}
</style><path class="rhw65eb3q"/>`,
		"fallback": "material-symbols:calendar-meal-outline-sharp",
	});
}

export default Component;
