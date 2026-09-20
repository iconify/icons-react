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
		"content": `<style>.tt-pcbbbv {
  fill: currentColor;
  d: path("M17 14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-1h14zM14 3a3 3 0 0 1 3 3v6H3V6a3 3 0 0 1 3-3zm-4 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="tt-pcbbbv"/>`,
		"fallback": "fluent:device-meeting-room-all-in-one-20-filled",
	});
}

export default Component;
