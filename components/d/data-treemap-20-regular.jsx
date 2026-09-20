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
		"content": `<style>.d5wecvbkk {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 1v12H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 12v-3h8v1a2 2 0 0 1-2 2zm8-4H8V4h6a2 2 0 0 1 2 2z");
}
</style><path class="d5wecvbkk"/>`,
		"fallback": "fluent:data-treemap-20-regular",
	});
}

export default Component;
