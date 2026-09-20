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
		"content": `<style>.u7ghn3b_b {
  fill: currentColor;
  d: path("M9 21q-.825 0-1.412-.587T7 19V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v14q0 .825-.587 1.413T15 21zM9 5v14h6V5zm0 0v14z");
}
</style><path class="u7ghn3b_b"/>`,
		"fallback": "material-symbols:crop-9-16-outline-rounded",
	});
}

export default Component;
