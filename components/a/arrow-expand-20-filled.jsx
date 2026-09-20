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
		"content": `<style>.jgfyvsbev {
  fill: currentColor;
  d: path("M3.75 3a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0V5.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L5.56 4.5h1.69a.75.75 0 0 0 0-1.5zm0 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L5.56 15.5h1.69a.75.75 0 0 1 0 1.5zM17 3.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69l-2.22 2.22a.75.75 0 0 0 1.06 1.06l2.22-2.22v1.69a.75.75 0 0 0 1.5 0zM16.25 17a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-1.5 0v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22h-1.69a.75.75 0 0 0 0 1.5z");
}
</style><path class="jgfyvsbev"/>`,
		"fallback": "fluent:arrow-expand-20-filled",
	});
}

export default Component;
