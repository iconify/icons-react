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
		"content": `<style>.int5d5yju {
  fill: currentColor;
  d: path("M2.442 15.385q0-2.187 2.064-3.209t4.552-1.022t4.552 1.022t2.063 3.209zm0 3.307v-1h13.231v1zm0 3.308v-1h13.231v1zm15.231 0v-6.61q0-2.355-1.757-3.93q-1.758-1.575-4.16-2.064l-.429-3.011h4.615v-4h1v4h4.616L19.95 22z");
}
</style><path class="int5d5yju"/>`,
		"fallback": "material-symbols-light:fastfood-sharp",
	});
}

export default Component;
