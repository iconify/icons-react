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
		"content": `<style>.tj5b1fbje {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v7.5A3.75 3.75 0 0 0 6.75 18h7.42a3.001 3.001 0 1 0-.129-1.5H6.75a2.25 2.25 0 0 1-2.25-2.25v-7.5A2.25 2.25 0 0 1 6.75 4.5h7.5a2.25 2.25 0 0 1 2.25 2.25v.5a.75.75 0 0 0 1.5 0v-.5A3.75 3.75 0 0 0 14.25 3zm7.08 7a3.001 3.001 0 1 0 .129 1.5h7.291a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.5a.75.75 0 0 0-1.5 0v.5A3.75 3.75 0 0 0 13.75 25h7.5A3.75 3.75 0 0 0 25 21.25v-7.5A3.75 3.75 0 0 0 21.25 10z");
}
</style><path class="tj5b1fbje"/>`,
		"fallback": "fluent:channel-share-28-filled",
	});
}

export default Component;
