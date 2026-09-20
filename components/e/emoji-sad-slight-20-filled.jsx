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
		"content": `<style>.monnj3ebp {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M8.5 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4-1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m.303 4.5h.797a.5.5 0 0 1 0 1h-.797c-1.077 0-2.13.319-3.026.916a.5.5 0 1 1-.554-.832A6.45 6.45 0 0 1 12.803 12");
}
</style><path class="monnj3ebp"/>`,
		"fallback": "fluent:emoji-sad-slight-20-filled",
	});
}

export default Component;
