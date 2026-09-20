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
		"content": `<style>.w4nztuu5h {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708l15 15a.5.5 0 0 0 .708-.708zm13.938 9.268L15.707 12.5L7.5 4.293l1.085-1.086a2 2 0 0 1 2.829 0l5.378 5.379a2 2 0 0 1 0 2.828M6.792 9L11 13.207l-4.086 4.086a2 2 0 0 1-2.828 0l-1.38-1.379a2 2 0 0 1 0-2.828zm.062 4.854l1-1a.5.5 0 1 0-.708-.707l-1 1a.5.5 0 1 0 .708.707");
}
</style><path class="w4nztuu5h"/>`,
		"fallback": "fluent:flashlight-off-20-filled",
	});
}

export default Component;
