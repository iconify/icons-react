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
		"content": `<style>.el2jtsbtf {
  fill: currentColor;
  d: path("M4 19.385v-1h16v1zM4 16V8h16v8zm1-1h14V9H5zM4 5.615v-1h16v1zM5 15V9z");
}
</style><path class="el2jtsbtf"/>`,
		"fallback": "material-symbols-light:calendar-view-day-outline-sharp",
	});
}

export default Component;
