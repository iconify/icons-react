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
		"content": `<style>.f-bzoyiqr {
  fill: currentColor;
  d: path("M4 11h4V6H4zm6 0h4V6h-4zm6 0h4V6h-4zM4 18h4v-5H4zm6 0h4v-5h-4zm6 0h4v-5h-4zM2 20V4h20v16z");
}
</style><path class="f-bzoyiqr"/>`,
		"fallback": "material-symbols:calendar-view-month-outline-sharp",
	});
}

export default Component;
