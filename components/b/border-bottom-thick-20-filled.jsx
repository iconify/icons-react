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
		"content": `<style>.f5u47oydx {
  fill: currentColor;
  d: path("M9 3a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm-4.644.496a1 1 0 1 1 1.162 1.62l.004.005a1 1 0 0 0-.4.4l-.006-.003a1 1 0 1 1-1.62-1.162l-.004-.003c.225-.342.519-.636.861-.861zM6 15a1 1 0 0 1-.879-.522l-.006.004a1 1 0 1 0-1.62 1.162l-.003.003A3 3 0 0 0 6 17h8a3 3 0 0 0 2.508-1.353l-.004-.002a1 1 0 1 0-1.62-1.162l-.005-.005a1 1 0 0 1-.879.523zm9.645-11.505a1 1 0 1 0-1.162 1.62l-.005.005c.17.092.309.232.4.4l.007-.003a1 1 0 1 0 1.62-1.162l.003-.003a3 3 0 0 0-.86-.861zM4 12a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1m11-1a1 1 0 1 0 2 0V9a1 1 0 1 0-2 0z");
}
</style><path class="f5u47oydx"/>`,
		"fallback": "fluent:border-bottom-thick-20-filled",
	});
}

export default Component;
