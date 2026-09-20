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
		"content": `<style>.jvr028-8e {
  fill: currentColor;
  d: path("M24.78 3.22a.75.75 0 0 1 0 1.06L5.56 23.5h9.69a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75v-11.5a.75.75 0 0 1 1.5 0v9.69L23.72 3.22a.75.75 0 0 1 1.06 0");
}
</style><path class="jvr028-8e"/>`,
		"fallback": "fluent:arrow-down-left-28-regular",
	});
}

export default Component;
