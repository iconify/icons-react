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
		"content": `<style>.wqk90fbic {
  fill: currentColor;
  d: path("m6 17l-5-5l5-5l1.4 1.4L3.825 12L7.4 15.6zm4.45 3.3l-1.9-.6l5-16l1.9.6zM18 17l-1.4-1.4l3.575-3.6L16.6 8.4L18 7l5 5z");
}
</style><path class="wqk90fbic"/>`,
		"fallback": "material-symbols:code-xml-sharp",
	});
}

export default Component;
