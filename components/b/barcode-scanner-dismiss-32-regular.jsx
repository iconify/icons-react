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
		"content": `<style>.xr8u8bcdq {
  fill: currentColor;
  d: path("M23 14.5a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15M3 21a1 1 0 0 1 1 1v2.5A2.5 2.5 0 0 0 6.5 27H9a1 1 0 1 1 0 2H6.5A4.5 4.5 0 0 1 2 24.5V22a1 1 0 0 1 1-1m23.78-2.78a.75.75 0 0 0-1.06 0L23 20.94l-2.72-2.72a.75.75 0 1 0-1.06 1.06L21.94 22l-2.72 2.72a.75.75 0 1 0 1.06 1.06L23 23.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L24.06 22l2.72-2.72a.75.75 0 0 0 0-1.06M8 9a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1m5.5 0a1 1 0 0 1 1 1v9.04a9 9 0 0 0-.46 3.8A1 1 0 0 1 12.5 22V10a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v3.705c-.72.304-1.39.701-2 1.173V10a1 1 0 0 1 1-1M24 9a1 1 0 0 1 1 1v3.226A9 9 0 0 0 23 13v-3a1 1 0 0 1 1-1M9 3a1 1 0 0 1 0 2H6.5A2.5 2.5 0 0 0 4 7.5V10a1 1 0 1 1-2 0V7.5A4.5 4.5 0 0 1 6.5 3zm16.5 0A4.5 4.5 0 0 1 30 7.5V10a1 1 0 1 1-2 0V7.5A2.5 2.5 0 0 0 25.5 5H23a1 1 0 1 1 0-2z");
}
</style><path class="xr8u8bcdq"/>`,
		"fallback": "fluent:barcode-scanner-dismiss-32-regular",
	});
}

export default Component;
