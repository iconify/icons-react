import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p9pwl0-yo {
  fill: currentColor;
  d: path("M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .966.784 1.75 1.75 1.75h15.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75M8.5 15.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-5.5-6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3");
}
</style><path class="p9pwl0-yo"/>`,
		"fallback": "fluent:calendar-month-28-regular",
	});
}

export default Component;
