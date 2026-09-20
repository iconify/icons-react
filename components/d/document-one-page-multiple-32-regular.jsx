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
		"content": `<style>.cct4l95ya {
  fill: currentColor;
  d: path("M26 5.75a3.25 3.25 0 0 1 2 3v14.5A6.75 6.75 0 0 1 21.25 30h-10.5a3.25 3.25 0 0 1-3-2h13.5A4.75 4.75 0 0 0 26 23.25zM21.25 2a3.25 3.25 0 0 1 3.25 3.25v18a3.25 3.25 0 0 1-3.25 3.25h-14A3.25 3.25 0 0 1 4 23.25v-18A3.25 3.25 0 0 1 7.25 2zm-14 2C6.56 4 6 4.56 6 5.25v18c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-18c0-.69-.56-1.25-1.25-1.25zM19 19a1 1 0 1 1 0 2H9.5a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2H9.5a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2H9.5a1 1 0 0 1 0-2z");
}
</style><path class="cct4l95ya"/>`,
		"fallback": "fluent:document-one-page-multiple-32-regular",
	});
}

export default Component;
