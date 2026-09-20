import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eb0_hlbwe {
  fill: currentColor;
  d: path("M9 5.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M8.5 7a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M7 5.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M6.5 7a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M5 5.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m6-2A2.5 2.5 0 0 0 8.5 1h-5A2.5 2.5 0 0 0 1 3.5v5A2.5 2.5 0 0 0 3.5 11h5A2.5 2.5 0 0 0 11 8.5zM8.5 2a1.5 1.5 0 0 1 1.415 1h-7.83A1.5 1.5 0 0 1 3.5 2zM2 4h8v4.5A1.5 1.5 0 0 1 8.5 10h-5A1.5 1.5 0 0 1 2 8.5z");
}
</style><path class="eb0_hlbwe"/>`,
		"fallback": "fluent:calendar-rtl-12-regular",
	});
}

export default Component;
