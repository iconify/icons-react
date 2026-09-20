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
		"content": `<style>.lew91yjin {
  fill: currentColor;
  d: path("M16 5a3 3 0 0 1 3 3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1l-.004.154A3 3 0 0 1 16 15H3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zM3 7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z");
}
</style><path class="lew91yjin"/>`,
		"fallback": "fluent:battery-7-20-filled",
	});
}

export default Component;
