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
		"content": `<style>.ohekqjybt {
  fill: currentColor;
  d: path("M14 8V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3zM4 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zm0-1h2V9H4zm3 0h2.5V9H7zm3.5 0H13V9h-2.5zm3.5 0h2V9h-2zm3.6-4.99a.5.5 0 0 1 0 .98l-.1.01H17v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9h-.5a.5.5 0 0 1 0-1H5V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3h2.5z");
}
</style><path class="ohekqjybt"/>`,
		"fallback": "fluent:balcony-20-regular",
	});
}

export default Component;
