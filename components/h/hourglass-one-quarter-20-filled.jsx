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
		"content": `<style>.jeez5ei_y {
  fill: currentColor;
  d: path("M6.68 14q-.212.28-.36.6A3.4 3.4 0 0 0 6 16h8a3.5 3.5 0 0 0-.31-1.4a3.4 3.4 0 0 0-.367-.6z");
}
</style><path class="jeez5ei_y"/>`,
		"fallback": "fluent:hourglass-one-quarter-20-filled",
	});
}

export default Component;
