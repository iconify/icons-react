import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w10t0tb5w {
  fill: currentColor;
  d: path("M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM5.25 9a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M8 9a.75.75 0 1 0 0 1.5A.75.75 0 0 0 8 9M5.25 5.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M8 5.5A.75.75 0 1 0 8 7a.75.75 0 0 0 0-1.5m2.75 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="w10t0tb5w"/>`,
		"fallback": "fluent:calendar-month-16-filled",
	});
}

export default Component;
