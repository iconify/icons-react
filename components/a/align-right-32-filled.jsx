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
		"content": `<style>.m4rqhpb1m {
  fill: currentColor;
  d: path("M29 4a1 1 0 1 0-2 0v24a1 1 0 1 0 2 0zm-7.5 1A3.5 3.5 0 0 1 25 8.5v3a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 3 11.5v-3A3.5 3.5 0 0 1 6.5 5zm0 12a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 9 23.5v-3a3.5 3.5 0 0 1 3.5-3.5z");
}
</style><path class="m4rqhpb1m"/>`,
		"fallback": "fluent:align-right-32-filled",
	});
}

export default Component;
