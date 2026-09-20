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
		"content": `<style>.r6ip3e__k {
  fill: currentColor;
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m-.003 2a.5.5 0 0 0-.349.145l-2.001 2.002a.5.5 0 1 0 .707.707L14 13.707V16.5a.5.5 0 0 0 1 0v-2.793l1.146 1.146a.5.5 0 1 0 .707-.707l-2-2a.5.5 0 0 0-.35-.146zM15 4a3 3 0 0 1 3 3v3.257A5.5 5.5 0 0 0 9.208 16H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM4.5 12a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m0-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m0-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m11 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5");
}
</style><path class="r6ip3e__k"/>`,
		"fallback": "fluent:filmstrip-arrow-up-20-filled",
	});
}

export default Component;
