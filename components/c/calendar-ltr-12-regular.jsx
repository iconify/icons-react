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
		"content": `<style>.ra7q-s48i {
  fill: currentColor;
  d: path("M3 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M3.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M5 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M5.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M7 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m-6-2A2.5 2.5 0 0 1 3.5 1h5A2.5 2.5 0 0 1 11 3.5v5A2.5 2.5 0 0 1 8.5 11h-5A2.5 2.5 0 0 1 1 8.5zM3.5 2a1.5 1.5 0 0 0-1.415 1h7.83A1.5 1.5 0 0 0 8.5 2zM10 4H2v4.5A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5z");
}
</style><path class="ra7q-s48i"/>`,
		"fallback": "fluent:calendar-ltr-12-regular",
	});
}

export default Component;
