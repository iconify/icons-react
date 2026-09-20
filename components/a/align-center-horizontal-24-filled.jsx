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
		"content": `<style>.oaw-6ijee {
  fill: currentColor;
  d: path("M21.25 12.75a.75.75 0 0 0 0-1.5H20v-2.5a2.25 2.25 0 0 0-2.25-2.25h-2.5A2.25 2.25 0 0 0 13 8.75v2.5h-2v-4.5A2.25 2.25 0 0 0 8.75 4.5h-2.5A2.25 2.25 0 0 0 4 6.75v4.5H2.75a.75.75 0 0 0 0 1.5H4v4.5a2.25 2.25 0 0 0 2.25 2.25h2.5A2.25 2.25 0 0 0 11 17.25v-4.5h2v2.5a2.25 2.25 0 0 0 2.25 2.25h2.5A2.25 2.25 0 0 0 20 15.25v-2.5z");
}
</style><path class="oaw-6ijee"/>`,
		"fallback": "fluent:align-center-horizontal-24-filled",
	});
}

export default Component;
