import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f2w3dab_q {
  fill: currentColor;
  d: path("m184.57 128l27.71-27.72a40 40 0 1 0-56.56-56.56L128 71.43l-27.72-27.71a40 40 0 1 0-56.56 56.56L71.43 128l-27.71 27.72a40 40 0 1 0 56.56 56.56L128 184.57l27.72 27.71a40 40 0 1 0 56.56-56.56ZM167 55a24 24 0 1 1 34 34l-27.72 27.72l-33.97-33.97Zm-5.09 73L128 161.94L94.06 128L128 94.06ZM55 89a24 24 0 1 1 34-34l27.72 27.72l-33.97 33.97Zm34 112a24 24 0 1 1-34-34l27.72-27.72l33.94 33.94Zm112 0a24 24 0 0 1-34 0l-27.72-27.72l33.94-33.94L201 167a24 24 0 0 1 0 34m-85-73a12 12 0 1 1 12 12a12 12 0 0 1-12-12");
}
</style><path class="f2w3dab_q"/>`,
		"fallback": "ph:bandaids",
	});
}

export default Component;
