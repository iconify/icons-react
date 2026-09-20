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
		"content": `<style>.w--22wvqf {
  fill: currentColor;
  d: path("M9.5 3v4H3V6a3 3 0 0 1 3-3zm1 0v9H17V6a3 3 0 0 0-3-3zM17 13h-6.5v4H14a3 3 0 0 0 3-3zm-7.5 4V8H3v6a3 3 0 0 0 3 3z");
}
</style><path class="w--22wvqf"/>`,
		"fallback": "fluent:board-20-filled",
	});
}

export default Component;
