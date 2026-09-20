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
		"content": `<style>.kbbxjvb6w {
  fill: currentColor;
  d: path("M3 21v-8.6l3 3l4-4l4 4l4-4l3 3V21zM3 3h18v8.575l-3-3l-4 4l-4-4l-4 4l-3-3z");
}
</style><path class="kbbxjvb6w"/>`,
		"fallback": "material-symbols:broken-image-sharp",
	});
}

export default Component;
