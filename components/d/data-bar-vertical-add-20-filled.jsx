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
		"content": `<style>.lduu710yx {
  fill: currentColor;
  d: path("M15 3a2 2 0 0 1 2 2v4.6a5.5 5.5 0 0 0-2.5-.6a5.5 5.5 0 0 0-1.5.207V5a2 2 0 0 1 2-2M9 14.5c0 .882.208 1.716.577 2.455A2 2 0 0 1 8 15V8a2 2 0 1 1 4 0v1.6a5.5 5.5 0 0 0-3 4.9M7 11a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0zm12 3.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="lduu710yx"/>`,
		"fallback": "fluent:data-bar-vertical-add-20-filled",
	});
}

export default Component;
