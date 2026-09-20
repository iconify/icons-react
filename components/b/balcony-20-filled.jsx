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
		"content": `<style>.i3_xuubtf {
  fill: currentColor;
  d: path("M17.6 8.01a.5.5 0 0 1 0 .98l-.1.01H17v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9h-.5a.5.5 0 0 1 0-1h15zM14 14h2V9h-2zM4 14h2V9H4zm3 0h2.5V9H7zm3.5 0H13V9h-2.5zM12 2a3 3 0 0 1 3 3v2H5V5a3 3 0 0 1 3-3z");
}
</style><path class="i3_xuubtf"/>`,
		"fallback": "fluent:balcony-20-filled",
	});
}

export default Component;
