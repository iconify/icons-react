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
		"content": `<style>.e-9xscaeb {
  fill: currentColor;
  d: path("m12 11.5l4-4H8zM19 3q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3zm0 11V5H5v9z");
}
</style><path class="e-9xscaeb"/>`,
		"fallback": "material-symbols:bottom-panel-close",
	});
}

export default Component;
