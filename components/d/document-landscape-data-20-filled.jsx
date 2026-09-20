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
		"content": `<style>.p-_e3fbbq {
  fill: currentColor;
  d: path("M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4zM9 7a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0zm5 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m-9 3a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0z");
}
</style><path class="p-_e3fbbq"/>`,
		"fallback": "fluent:document-landscape-data-20-filled",
	});
}

export default Component;
