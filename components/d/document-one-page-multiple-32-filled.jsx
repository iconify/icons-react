import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.do26vw7rw {
  fill: currentColor;
  d: path("M26 5.75a3.25 3.25 0 0 1 2 3v14.5A6.75 6.75 0 0 1 21.25 30h-10.5a3.25 3.25 0 0 1-3-2h13.5A4.75 4.75 0 0 0 26 23.25zM21.25 2a3.25 3.25 0 0 1 3.25 3.25v18a3.25 3.25 0 0 1-3.25 3.25h-14A3.25 3.25 0 0 1 4 23.25v-18A3.25 3.25 0 0 1 7.25 2zM9.5 19a1 1 0 1 0 0 2H19a1 1 0 1 0 0-2zm0-6a1 1 0 1 0 0 2H19a1 1 0 1 0 0-2zm0-6a1 1 0 0 0 0 2H19a1 1 0 1 0 0-2z");
}
</style><path class="do26vw7rw"/>`,
		"fallback": "fluent:document-one-page-multiple-32-filled",
	});
}

export default Component;
