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
		"content": `<style>.b3hs_t7rs {
  fill: currentColor;
  d: path("M2 5.25A3.25 3.25 0 0 1 5.25 2h10.5A3.25 3.25 0 0 1 19 5.25V9H6.75a.75.75 0 0 0 0 1.5h3A3.73 3.73 0 0 0 9 12.75v6.5q0 .386.075.75H5.25A3.25 3.25 0 0 1 2 16.75zm4 1.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75m4 6A2.75 2.75 0 0 1 12.75 10h6.5A2.75 2.75 0 0 1 22 12.75v.75H10zM10 15h12v4.25A2.75 2.75 0 0 1 19.25 22h-6.5A2.75 2.75 0 0 1 10 19.25z");
}
</style><path class="b3hs_t7rs"/>`,
		"fallback": "fluent:calendar-template-24-filled",
	});
}

export default Component;
