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
		"content": `<style>.li9i04stn {
  fill: currentColor;
  d: path("M10.5 18a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m4 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5-6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m4 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M4 9a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v1h20V9a3 3 0 0 0-3-3zM6 23a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V12H6z");
}
</style><path class="li9i04stn"/>`,
		"fallback": "fluent:calendar-32-regular",
	});
}

export default Component;
