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
		"content": `<style>.kmz0o6bwk {
  fill: currentColor;
  d: path("M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M14.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1V3.5a.5.5 0 0 0-.5-.5m0 8c1.33 0 2.55-.472 3.5-1.257V16a2 2 0 0 1-2 2h-5.5V9.275a5.5 5.5 0 0 0 4 1.725m-5-3.206A5.5 5.5 0 0 1 9.022 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5zM6 15.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z");
}
</style><path class="kmz0o6bwk"/>`,
		"fallback": "fluent:dual-screen-clock-20-filled",
	});
}

export default Component;
