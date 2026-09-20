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
		"content": `<style>.yom8oybzz {
  fill: currentColor;
  d: path("M11.379 3a2 2 0 0 1 1.414.586l3.621 3.621A2 2 0 0 1 17 8.621V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM5 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h-3.5A1.5 1.5 0 0 1 11 7.5V4zm7 3.5a.5.5 0 0 0 .5.5h3.283a1 1 0 0 0-.076-.086l-3.621-3.621A1 1 0 0 0 12 4.217z");
}
</style><path class="yom8oybzz"/>`,
		"fallback": "fluent:document-square-20-regular",
	});
}

export default Component;
