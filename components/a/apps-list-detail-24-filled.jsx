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
		"content": `<style>.a2k4rnb7q {
  fill: currentColor;
  d: path("M4.25 4A2.25 2.25 0 0 0 2 6.25v2.5A2.25 2.25 0 0 0 4.25 11h2.5A2.25 2.25 0 0 0 9 8.75v-2.5A2.25 2.25 0 0 0 6.75 4zm7 1a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm-7 5A2.25 2.25 0 0 0 2 15.25v2.5A2.25 2.25 0 0 0 4.25 20h2.5A2.25 2.25 0 0 0 9 17.75v-2.5A2.25 2.25 0 0 0 6.75 13zm7 1a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z");
}
</style><path class="a2k4rnb7q"/>`,
		"fallback": "fluent:apps-list-detail-24-filled",
	});
}

export default Component;
