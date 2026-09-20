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
		"content": `<style>.tjex-u8kb {
  fill: currentColor;
  d: path("M10 6a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4-3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM4 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1H4zM6 4a2 2 0 0 0-2 2v6h12V6a2 2 0 0 0-2-2z");
}
</style><path class="tjex-u8kb"/>`,
		"fallback": "fluent:device-meeting-room-all-in-one-20-regular",
	});
}

export default Component;
