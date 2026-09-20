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
		"content": `<style>.gx-qd5bsf {
  fill: currentColor;
  d: path("M5.754 4a3.75 3.75 0 0 0-3.75 3.75v11.5A3.75 3.75 0 0 0 5.754 23H22.25A3.75 3.75 0 0 0 26 19.25V7.75A3.75 3.75 0 0 0 22.25 4zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25H9v16H5.754a2.25 2.25 0 0 1-2.25-2.25zM10.5 21.5v-16h11.75a2.25 2.25 0 0 1 2.25 2.25v11.5a2.25 2.25 0 0 1-2.25 2.25z");
}
</style><path class="gx-qd5bsf"/>`,
		"fallback": "fluent:dock-panel-left-28-regular",
	});
}

export default Component;
