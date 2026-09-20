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
		"content": `<style>.scdpouf9m {
  fill: currentColor;
  d: path("M13 18q-.425 0-.712-.288T12 17v-4q0-.425.288-.712T13 12h4q.425 0 .713.288T18 13v1l1.275-.675q.25-.125.488.025t.237.425v2.45q0 .275-.238.425t-.487.025L18 16v1q0 .425-.288.713T17 18zm-9 1v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6.4 4.8q.4.3.413.7t-.213.7t-.612.4t-.788-.2L12 5.5L6 10v9h13q.425 0 .713.288T20 20t-.288.713T19 21H6q-.825 0-1.412-.587T4 19m8-6.75");
}
</style><path class="scdpouf9m"/>`,
		"fallback": "material-symbols:camera-outdoor-outline-rounded",
	});
}

export default Component;
