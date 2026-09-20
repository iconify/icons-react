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
		"content": `<style>.msgvenb2b {
  fill: currentColor;
  d: path("M7 11.5a3.5 3.5 0 0 0 3.5 3.5h1.45a2.5 2.5 0 0 1-2.45 2h-4A2.5 2.5 0 0 1 3 14.5v-6A2.5 2.5 0 0 1 5.5 6H7zM14.5 3A2.5 2.5 0 0 1 17 5.5v6a2.5 2.5 0 0 1-2.5 2.5h-4A2.5 2.5 0 0 1 8 11.5v-6A2.5 2.5 0 0 1 10.5 3z");
}
</style><path class="msgvenb2b"/>`,
		"fallback": "fluent:copy-20-filled",
	});
}

export default Component;
