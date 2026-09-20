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
		"content": `<style>.x7nitmb8o {
  fill: currentColor;
  d: path("M8.673 20L4 15.327V8.673L8.673 4h6.654L20 8.673v6.654L15.327 20zm.477-4.442l2.85-2.85l2.85 2.85l.708-.708l-2.85-2.85l2.85-2.85l-.708-.708l-2.85 2.85l-2.85-2.85l-.708.708l2.85 2.85l-2.85 2.85zM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8zm2.9-7");
}
</style><path class="x7nitmb8o"/>`,
		"fallback": "material-symbols-light:dangerous-outline-sharp",
	});
}

export default Component;
