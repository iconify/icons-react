import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pfpszt2db {
  fill: currentColor;
  d: path("M29 25.75A3.25 3.25 0 0 1 25.75 29h-5.5A3.25 3.25 0 0 1 17 25.75v-8.5A3.25 3.25 0 0 1 20.25 14h5.5A3.25 3.25 0 0 1 29 17.25zm-15-11A3.25 3.25 0 0 1 10.75 18h-4.5A3.25 3.25 0 0 1 3 14.75v-8.5A3.25 3.25 0 0 1 6.25 3h4.5A3.25 3.25 0 0 1 14 6.25zm15-7A3.25 3.25 0 0 1 25.75 11h-5.5A3.25 3.25 0 0 1 17 7.75v-1.5A3.25 3.25 0 0 1 20.25 3h5.5A3.25 3.25 0 0 1 29 6.25zm-15 18A3.25 3.25 0 0 1 10.75 29h-4.5A3.25 3.25 0 0 1 3 25.75v-1.5A3.25 3.25 0 0 1 6.25 21h4.5A3.25 3.25 0 0 1 14 24.25z");
}
</style><path class="pfpszt2db"/>`,
		"fallback": "fluent:glance-32-filled",
	});
}

export default Component;
