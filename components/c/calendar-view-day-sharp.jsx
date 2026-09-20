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
		"content": `<style>.jytbc-b3w {
  fill: currentColor;
  d: path("M4 19.385v-1h16v1zM4 16V8h16v8zM4 5.615v-1h16v1z");
}
</style><path class="jytbc-b3w"/>`,
		"fallback": "material-symbols-light:calendar-view-day-sharp",
	});
}

export default Component;
