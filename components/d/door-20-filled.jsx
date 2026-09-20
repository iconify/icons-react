import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.is-g89sui {
  fill: currentColor;
  d: path("M14 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM7 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="is-g89sui"/>`,
		"fallback": "fluent:door-20-filled",
	});
}

export default Component;
