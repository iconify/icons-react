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
		"content": `<style>.dsc_9nogs {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v3.5h5.5V4zm4.5 0v5.5H16V6a2 2 0 0 0-2-2zm5.5 6.5h-5.5V16H14a2 2 0 0 0 2-2zM9.5 16v-5.5H4V14a2 2 0 0 0 2 2z");
}
</style><path class="dsc_9nogs"/>`,
		"fallback": "fluent:border-all-20-regular",
	});
}

export default Component;
