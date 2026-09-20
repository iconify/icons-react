import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xkmqs8b0a {
  fill: currentColor;
  d: path("M14 11.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5V11h12zM11.5 2A2.5 2.5 0 0 1 14 4.5V10H2V4.5A2.5 2.5 0 0 1 4.5 2zM8 4.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="xkmqs8b0a"/>`,
		"fallback": "fluent:device-meeting-room-all-in-one-16-filled",
	});
}

export default Component;
