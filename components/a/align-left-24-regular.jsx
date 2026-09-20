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
		"content": `<style>.sazc8xb7p {
  fill: currentColor;
  d: path("M3 2.75a.75.75 0 0 1 1.5 0v18.5a.75.75 0 0 1-1.5 0zM8.25 4A2.25 2.25 0 0 0 6 6.25v2.5A2.25 2.25 0 0 0 8.25 11h10.5A2.25 2.25 0 0 0 21 8.75v-2.5A2.25 2.25 0 0 0 18.75 4zM7.5 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75zM8.25 13A2.25 2.25 0 0 0 6 15.25v2.5A2.25 2.25 0 0 0 8.25 20h7a2.25 2.25 0 0 0 2.25-2.25v-2.5A2.25 2.25 0 0 0 15.25 13zm-.75 2.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75z");
}
</style><path class="sazc8xb7p"/>`,
		"fallback": "fluent:align-left-24-regular",
	});
}

export default Component;
