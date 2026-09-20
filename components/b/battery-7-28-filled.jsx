import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q8d-l8fcv {
  fill: currentColor;
  d: path("M2 10.75A3.75 3.75 0 0 1 5.75 7h14.5A3.75 3.75 0 0 1 24 10.75V12h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1.25A3.75 3.75 0 0 1 20.25 21H5.75A3.75 3.75 0 0 1 2 17.25zM5 11v6a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1");
}
</style><path class="q8d-l8fcv"/>`,
		"fallback": "fluent:battery-7-28-filled",
	});
}

export default Component;
