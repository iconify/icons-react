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
		"content": `<style>.ib6g-_bhj {
  fill: currentColor;
  d: path("M13 14a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1zm2-10a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-5 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m0 1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-5 .75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="ib6g-_bhj"/>`,
		"fallback": "fluent:device-meeting-room-bar-20-filled",
	});
}

export default Component;
