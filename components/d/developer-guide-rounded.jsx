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
		"content": `<style>.kt2oz8byi {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm7-16v6.125q0 .3.25.438t.5-.013l1.225-.75q.25-.15.525-.15t.525.15l1.225.75q.25.15.5.013t.25-.438V5z");
}
</style><path class="kt2oz8byi"/>`,
		"fallback": "material-symbols:developer-guide-rounded",
	});
}

export default Component;
