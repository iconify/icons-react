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
		"content": `<style>.lh06n7u4u {
  fill: currentColor;
  d: path("M4 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4v1a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2h1a1 1 0 0 0 1-1v-1H8a4 4 0 0 1-4-4zm14.17 18c-.11-.313-.17-.65-.17-1v-1h-4v1c0 .35-.06.687-.17 1zM24 22a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm2-14a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10h20z");
}
</style><path class="lh06n7u4u"/>`,
		"fallback": "fluent:desktop-mac-32-regular",
	});
}

export default Component;
