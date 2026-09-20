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
		"content": `<style>.tmz-0g8qt {
  fill: currentColor;
  d: path("M4.665 2c-.896 0-1.683.596-1.926 1.459l-1.66 5.898A2.08 2.08 0 0 0 3.083 12h9.834a2.08 2.08 0 0 0 2.004-2.643l-1.66-5.898A2 2 0 0 0 11.335 2zm-.963 1.73A1 1 0 0 1 4.665 3h6.67a1 1 0 0 1 .963.73l1.66 5.898A1.08 1.08 0 0 1 12.918 11H3.082a1.08 1.08 0 0 1-1.04-1.372zM4.497 13a.5.5 0 1 0 0 1h7.005a.5.5 0 1 0 0-1z");
}
</style><path class="tmz-0g8qt"/>`,
		"fallback": "fluent:device-meeting-room-16-regular",
	});
}

export default Component;
