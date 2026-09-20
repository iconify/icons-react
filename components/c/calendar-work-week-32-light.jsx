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
		"content": `<style>.yerotlbav {
  fill: currentColor;
  d: path("M9.5 9A1.5 1.5 0 0 0 8 10.5v5A1.5 1.5 0 0 0 9.5 17h13a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 22.5 9zM9 10.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5zm-6-3A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM7.5 4A3.5 3.5 0 0 0 4 7.5v17A3.5 3.5 0 0 0 7.5 28h17a3.5 3.5 0 0 0 3.5-3.5v-17A3.5 3.5 0 0 0 24.5 4z");
}
</style><path class="yerotlbav"/>`,
		"fallback": "fluent:calendar-work-week-32-light",
	});
}

export default Component;
