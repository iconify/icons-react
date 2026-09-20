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
		"content": `<style>.cuz65bc5x {
  fill: currentColor;
  d: path("M15.596 7.303a3.5 3.5 0 1 1 .707-.707l2.55 2.55a.5.5 0 0 1-.707.708zM16 4.5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0m0 4.621V17.5a.5.5 0 0 1-.794.404L10 14.118l-5.206 3.786A.5.5 0 0 1 4 17.5v-13A2.5 2.5 0 0 1 6.5 2h3.258a4.5 4.5 0 0 0 5.682 6.561z");
}
</style><path class="cuz65bc5x"/>`,
		"fallback": "fluent:bookmark-search-20-filled",
	});
}

export default Component;
