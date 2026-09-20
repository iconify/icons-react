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
		"content": `<style>.h06ytabyu {
  fill: currentColor;
  d: path("M10 9.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm6-.5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13A.5.5 0 0 1 16 9m7 .5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm-20-2A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM7.5 4A3.5 3.5 0 0 0 4 7.5v17A3.5 3.5 0 0 0 7.5 28h17a3.5 3.5 0 0 0 3.5-3.5v-17A3.5 3.5 0 0 0 24.5 4z");
}
</style><path class="h06ytabyu"/>`,
		"fallback": "fluent:calendar-3-day-32-light",
	});
}

export default Component;
