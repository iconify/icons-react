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
		"content": `<style>.ypf3hsc2t {
  fill: currentColor;
  d: path("M22.251 17a3.75 3.75 0 0 1 3.75 3.75v1.5a3.75 3.75 0 0 1-3.75 3.75H5.754a3.75 3.75 0 0 1-3.75-3.75v-1.5a3.75 3.75 0 0 1 3.227-3.714l-.187.825a1.75 1.75 0 0 0 2.094 2.095l4.938-1.122a3.75 3.75 0 0 0 1.822-1.005l.829-.829zM19.246 2a3.76 3.76 0 0 1 3.756 3.755c0 .994-.395 1.95-1.099 2.654l-8.713 8.713c-.366.367-.83.622-1.335.737l-4.939 1.122a.75.75 0 0 1-.897-.897l1.124-4.937a2.75 2.75 0 0 1 .736-1.335l8.714-8.713A3.76 3.76 0 0 1 19.246 2");
}
</style><path class="ypf3hsc2t"/>`,
		"fallback": "fluent:color-line-28-filled",
	});
}

export default Component;
