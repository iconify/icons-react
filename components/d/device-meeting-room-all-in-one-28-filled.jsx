import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bk8cmtbyt {
  fill: currentColor;
  d: path("M25 21.25A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V19.5h22zM21.25 3A3.75 3.75 0 0 1 25 6.75V18H3V6.75A3.75 3.75 0 0 1 6.75 3zM14 7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3");
}
</style><path class="bk8cmtbyt"/>`,
		"fallback": "fluent:device-meeting-room-all-in-one-28-filled",
	});
}

export default Component;
