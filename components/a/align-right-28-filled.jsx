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
		"content": `<style>.eblb022sy {
  fill: currentColor;
  d: path("M25 2.75a.75.75 0 0 0-1.5 0v22.5a.75.75 0 0 0 1.5 0zM19.25 5A2.75 2.75 0 0 1 22 7.75v2.5A2.75 2.75 0 0 1 19.25 13H5.75A2.75 2.75 0 0 1 3 10.25v-2.5A2.75 2.75 0 0 1 5.75 5zm0 10A2.75 2.75 0 0 1 22 17.75v2.5A2.75 2.75 0 0 1 19.25 23h-8a2.75 2.75 0 0 1-2.75-2.75v-2.5A2.75 2.75 0 0 1 11.25 15z");
}
</style><path class="eblb022sy"/>`,
		"fallback": "fluent:align-right-28-filled",
	});
}

export default Component;
