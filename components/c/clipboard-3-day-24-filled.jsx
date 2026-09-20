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
		"content": `<style>.bofd8vbei {
  fill: currentColor;
  d: path("M13.75 2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V6.25A2.25 2.25 0 0 0 17.75 4h-1.764a2.25 2.25 0 0 0-2.236-2m-3.5 1.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5M8 17.25v-7.5a.75.75 0 0 1 1.5 0v7.5a.75.75 0 0 1-1.5 0m7.25.75a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5a.75.75 0 0 1-.75.75m-4-.75v-7.5a.75.75 0 0 1 1.5 0v7.5a.75.75 0 0 1-1.5 0");
}
</style><path class="bofd8vbei"/>`,
		"fallback": "fluent:clipboard-3-day-24-filled",
	});
}

export default Component;
