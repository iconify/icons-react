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
		"content": `<style>.qywa5i-8i {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h1V1h2v2h8V1h2v2h1q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm14-2V5H5v14zM9 17h1.5v-4q.65-.175 1.075-.712T12 11.075V7h-1v3.775h-.75V7h-1v3.775H8.5V7h-1v4.075q0 .675.425 1.213T9 13zm6 0h1.5V7q-1.25 0-2.125.875T13.5 10v3H15zM5 19V5z");
}
</style><path class="qywa5i-8i"/>`,
		"fallback": "material-symbols:calendar-meal-outline",
	});
}

export default Component;
