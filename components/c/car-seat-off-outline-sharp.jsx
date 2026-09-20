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
		"content": `<style>.ruu06xbnh {
  fill: currentColor;
  d: path("M9.325 6.5L6.5 3.7q.275-.325.663-.513T8 3q.825 0 1.413.588T10 5q0 .45-.175.838t-.5.662M21.2 21.2l-1.4 1.4l-4.6-4.6H9.15q-.725 0-1.263-.437T7.2 16.4l-1.1-5.35q-.1-.5 0-.95t.35-.85L1.4 4.2l1.4-1.4z");
}
</style><path class="ruu06xbnh"/>`,
		"fallback": "material-symbols:car-seat-off-outline-sharp",
	});
}

export default Component;
