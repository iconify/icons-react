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
		"content": `<style>.mxumiac1b {
  fill: currentColor;
  d: path("M5.75 3A2.75 2.75 0 0 0 3 5.75v6.5A2.75 2.75 0 0 0 5.75 15h4.5A2.75 2.75 0 0 0 13 12.25v-6.5A2.75 2.75 0 0 0 10.25 3zM3 20.75A2.75 2.75 0 0 1 5.75 18h4.5A2.75 2.75 0 0 1 13 20.75v1.5A2.75 2.75 0 0 1 10.25 25h-4.5A2.75 2.75 0 0 1 3 22.25zm12-15A2.75 2.75 0 0 1 17.75 3h4.5A2.75 2.75 0 0 1 25 5.75v1.5A2.75 2.75 0 0 1 22.25 10h-4.5A2.75 2.75 0 0 1 15 7.25zm0 10A2.75 2.75 0 0 1 17.75 13h4.5A2.75 2.75 0 0 1 25 15.75v6.5A2.75 2.75 0 0 1 22.25 25h-4.5A2.75 2.75 0 0 1 15 22.25z");
}
</style><path class="mxumiac1b"/>`,
		"fallback": "fluent:glance-28-filled",
	});
}

export default Component;
