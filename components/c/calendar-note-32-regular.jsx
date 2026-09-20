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
		"content": `<style>.yl3ezx9di {
  fill: currentColor;
  d: path("M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h6.626A4 4 0 0 1 14 28v-1H7.5A2.5 2.5 0 0 1 5 24.5V11h22v4h1q.519.002 1 .126V7.5A4.5 4.5 0 0 0 24.5 3zM5 7.5A2.5 2.5 0 0 1 7.5 5h17A2.5 2.5 0 0 1 27 7.5V9H5zm13 9a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5v-9a2.5 2.5 0 0 0-2.5-2.5zm.75 5.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5zM18 25.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75");
}
</style><path class="yl3ezx9di"/>`,
		"fallback": "fluent:calendar-note-32-regular",
	});
}

export default Component;
