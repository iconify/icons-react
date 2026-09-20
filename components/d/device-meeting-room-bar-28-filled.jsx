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
		"content": `<style>.cr1e9ibgu {
  fill: currentColor;
  d: path("M18.251 22a.75.75 0 0 1 0 1.5H9.754a.75.75 0 0 1 0-1.5zm4-16a3.75 3.75 0 0 1 3.75 3.75v6.5a3.75 3.75 0 0 1-3.75 3.75H5.754a3.75 3.75 0 0 1-3.75-3.75v-6.5A3.75 3.75 0 0 1 5.754 6zM14 9a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 1.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-8 1.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5");
}
</style><path class="cr1e9ibgu"/>`,
		"fallback": "fluent:device-meeting-room-bar-28-filled",
	});
}

export default Component;
