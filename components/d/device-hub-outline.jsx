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
		"content": `<style>.wg2a_ubgo {
  fill: currentColor;
  d: path("M3 21v-5h4l4-4V8.8q-.9-.325-1.45-1.088T9 6q0-1.25.875-2.125T12 3t2.125.875T15 6q0 .95-.55 1.713T13 8.8V12l4 4h4v5h-5v-3.05l-4-4l-4 4V21z");
}
</style><path class="wg2a_ubgo"/>`,
		"fallback": "material-symbols:device-hub-outline",
	});
}

export default Component;
