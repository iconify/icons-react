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
		"content": `<style>.du7r9rb5t {
  fill: currentColor;
  d: path("M19 6a3 3 0 0 1 3 3v2a1 1 0 0 1-.168.555l-4 6A1 1 0 0 1 17 18H7a1 1 0 0 1-.832-.445l-4-6A1 1 0 0 1 2 11V9a3 3 0 0 1 3-3ZM8 12h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2");
}
</style><path class="du7r9rb5t"/>`,
		"fallback": "coolicons:hdmi-fill",
	});
}

export default Component;
