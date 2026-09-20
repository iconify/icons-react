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
		"content": `<style>.wmdr4zb6z {
  fill: currentColor;
  d: path("M208 32H83.31A15.86 15.86 0 0 0 72 36.69L36.69 72A15.86 15.86 0 0 0 32 83.31V208a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 152a32 32 0 1 1 32-32a32 32 0 0 1-32 32m44-104a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4V48h88Z");
}
</style><path class="wmdr4zb6z"/>`,
		"fallback": "ph:floppy-disk-back-fill",
	});
}

export default Component;
