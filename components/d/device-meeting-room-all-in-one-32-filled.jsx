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
		"content": `<style>.zktljbb1x {
  fill: currentColor;
  d: path("M29 24.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5V22h26zM24.5 3A4.5 4.5 0 0 1 29 7.5V20H3V7.5A4.5 4.5 0 0 1 7.5 3zM16 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4");
}
</style><path class="zktljbb1x"/>`,
		"fallback": "fluent:device-meeting-room-all-in-one-32-filled",
	});
}

export default Component;
