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
		"content": `<style>.w0zgzabzn {
  fill: currentColor;
  d: path("M3 2.75a.75.75 0 0 1 1.5 0v22.5a.75.75 0 0 1-1.5 0zM8.75 5A2.75 2.75 0 0 0 6 7.75v2.5A2.75 2.75 0 0 0 8.75 13h13.5A2.75 2.75 0 0 0 25 10.25v-2.5A2.75 2.75 0 0 0 22.25 5zm0 10A2.75 2.75 0 0 0 6 17.75v2.5A2.75 2.75 0 0 0 8.75 23h8a2.75 2.75 0 0 0 2.75-2.75v-2.5A2.75 2.75 0 0 0 16.75 15z");
}
</style><path class="w0zgzabzn"/>`,
		"fallback": "fluent:align-left-28-filled",
	});
}

export default Component;
