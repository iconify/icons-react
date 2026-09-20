import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yz0dwkbrd {
  fill: currentColor;
  d: path("M7.5 3A4.5 4.5 0 0 0 3 7.5V9h26V7.5A4.5 4.5 0 0 0 24.5 3zM29 11H3v13.5A4.5 4.5 0 0 0 7.5 29h6.626A4 4 0 0 1 14 28v-9a4 4 0 0 1 4-4h10q.519.002 1 .126zm-11 5.5a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5v-9a2.5 2.5 0 0 0-2.5-2.5zm.75 5.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5zM18 25.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75");
}
</style><path class="yz0dwkbrd"/>`,
		"fallback": "fluent:calendar-note-32-filled",
	});
}

export default Component;
