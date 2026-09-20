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
		"content": `<style>.lvmztubxl {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m15.5-3.75a.75.75 0 0 0-1.5 0V9a5 5 0 0 0-4-2a4.99 4.99 0 0 0-3.81 1.762a.75.75 0 1 0 1.143.972a3.5 3.5 0 0 1 5.83.766H13.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75zM7.25 16.5a.75.75 0 0 0 .75-.75V15a5 5 0 0 0 4 2a4.99 4.99 0 0 0 3.809-1.76a.75.75 0 0 0-1.142-.973a3.5 3.5 0 0 1-5.83-.767h1.413a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75");
}
</style><path class="lvmztubxl"/>`,
		"fallback": "fluent:arrow-sync-circle-24-filled",
	});
}

export default Component;
