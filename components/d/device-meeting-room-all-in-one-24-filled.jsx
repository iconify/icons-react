import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.onnqm4mxo {
  fill: currentColor;
  d: path("M21 17.75A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V16h18zM17.75 3A3.25 3.25 0 0 1 21 6.25v8.25H3V6.25A3.25 3.25 0 0 1 6.25 3zM12 6.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5");
}
</style><path class="onnqm4mxo"/>`,
		"fallback": "fluent:device-meeting-room-all-in-one-24-filled",
	});
}

export default Component;
