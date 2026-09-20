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
		"content": `<style>.faegshbow {
  fill: currentColor;
  d: path("M10 3.25A1.75 1.75 0 0 0 8.25 5v3.25H5A1.75 1.75 0 0 0 3.25 10v4c0 .966.784 1.75 1.75 1.75h3.25V19c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 15.75 19v-3.25H19A1.75 1.75 0 0 0 20.75 14v-4A1.75 1.75 0 0 0 19 8.25h-3.25V5A1.75 1.75 0 0 0 14 3.25z");
}
</style><path class="faegshbow"/>`,
		"fallback": "fluent:doctor-24-filled",
	});
}

export default Component;
