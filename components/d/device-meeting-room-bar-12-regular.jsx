import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tws9dk5mc {
  fill: currentColor;
  d: path("M7.5 9a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zM9 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM3 3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-2.5.5a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1");
}
</style><path class="tws9dk5mc"/>`,
		"fallback": "fluent:device-meeting-room-bar-12-regular",
	});
}

export default Component;
