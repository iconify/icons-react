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
		"content": `<style>.jjebf8bug {
  fill: currentColor;
  d: path("m11.054 15.308l2.6-2.6l2.6 2.6l.707-.708l-2.6-2.6l2.6-2.6l-.707-.708l-2.6 2.6l-2.6-2.6l-.708.708l2.6 2.6l-2.6 2.6zM8.366 19L3 12l5.366-7H21v14zM4.25 12l4.616 6H20V6H8.866zm7.885 0");
}
</style><path class="jjebf8bug"/>`,
		"fallback": "material-symbols-light:backspace-outline-sharp",
	});
}

export default Component;
