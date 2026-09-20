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
		"content": `<style>.eq7_yybou {
  fill: currentColor;
  d: path("M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v8.792a9 9 0 0 0-2-1.357V11H5v13.5A2.5 2.5 0 0 0 7.5 27h7.435c.362.728.82 1.4 1.357 2H7.5A4.5 4.5 0 0 1 3 24.5zM27 9V7.5A2.5 2.5 0 0 0 24.5 5h-17A2.5 2.5 0 0 0 5 7.5V9zm-4 21.5a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15M22.75 18a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H23.5v-3.75a.75.75 0 0 0-.75-.75");
}
</style><path class="eq7_yybou"/>`,
		"fallback": "fluent:calendar-clock-32-regular",
	});
}

export default Component;
