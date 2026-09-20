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
		"content": `<style>.mowuy-zwo {
  fill: currentColor;
  d: path("M21 3.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 .75.75m0 16.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 .75.75M7.25 8A2.25 2.25 0 0 0 5 10.25v3.5A2.25 2.25 0 0 0 7.25 16h9.5A2.25 2.25 0 0 0 19 13.75v-3.5A2.25 2.25 0 0 0 16.75 8z");
}
</style><path class="mowuy-zwo"/>`,
		"fallback": "fluent:center-vertical-24-filled",
	});
}

export default Component;
