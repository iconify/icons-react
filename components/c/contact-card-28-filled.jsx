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
		"content": `<style>.u8mk3k4ue {
  fill: currentColor;
  d: path("M4.754 4a2.75 2.75 0 0 0-2.75 2.75v14.5A2.75 2.75 0 0 0 4.754 24H23.25A2.75 2.75 0 0 0 26 21.25V6.75A2.75 2.75 0 0 0 23.25 4zM15 11.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m.75 3.25h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5m-4.5-3.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0M7 14.5h5a1 1 0 0 1 1 1v.5s-.5 2.5-3.5 2.5S6 16 6 16v-.5a1 1 0 0 1 1-1");
}
</style><path class="u8mk3k4ue"/>`,
		"fallback": "fluent:contact-card-28-filled",
	});
}

export default Component;
