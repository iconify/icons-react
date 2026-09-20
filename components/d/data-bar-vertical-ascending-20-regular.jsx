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
		"content": `<style>.muf9pj3dx {
  fill: currentColor;
  d: path("M15 3a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2m1 2a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0zm-4 3a2 2 0 1 0-4 0v7a2 2 0 1 0 4 0zm-2-1a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m-3 4a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0zm-2-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1");
}
</style><path class="muf9pj3dx"/>`,
		"fallback": "fluent:data-bar-vertical-ascending-20-regular",
	});
}

export default Component;
