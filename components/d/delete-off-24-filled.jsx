import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.asznrysyf {
  fill: currentColor;
  d: path("M3.94 5L2.22 3.28a.75.75 0 1 1 1.06-1.06l18.5 18.5a.75.75 0 0 1-1.06 1.06l-2.19-2.19A3.75 3.75 0 0 1 15.025 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5zM15 16.06l-1.5-1.5v2.69a.75.75 0 0 0 1.5 0zm-4.5-4.5L9 10.06v7.19a.75.75 0 0 0 1.5 0zM15 9.75v2.069l4.026 4.026l.905-9.345h1.319a.75.75 0 0 0 0-1.5H15.5a3.5 3.5 0 1 0-7 0h-.318l5.318 5.319V9.75a.75.75 0 0 1 1.5 0M14 5h-4a2 2 0 1 1 4 0");
}
</style><path class="asznrysyf"/>`,
		"fallback": "fluent:delete-off-24-filled",
	});
}

export default Component;
