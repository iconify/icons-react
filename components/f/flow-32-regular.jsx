import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jiy2xmbyr {
  fill: currentColor;
  d: path("M24.5 6a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m-5.41 4.5A5.502 5.502 0 0 0 30 9.5a5.5 5.5 0 0 0-10.91-1H19a4 4 0 0 0-4 4v7a2 2 0 0 1-2 2h-.09A5.502 5.502 0 0 0 2 22.5a5.5 5.5 0 0 0 10.91 1H13a4 4 0 0 0 4-4v-7a2 2 0 0 1 2-2zM11 22.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0");
}
</style><path class="jiy2xmbyr"/>`,
		"fallback": "fluent:flow-32-regular",
	});
}

export default Component;
