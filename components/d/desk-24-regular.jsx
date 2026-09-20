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
		"content": `<style>.psqhfm61d {
  fill: currentColor;
  d: path("M4.25 4A2.25 2.25 0 0 0 2 6.25v11A2.75 2.75 0 0 0 4.75 20h4.5A2.75 2.75 0 0 0 12 17.25V9.5h8.5v9.75a.75.75 0 0 0 1.5 0v-13A2.25 2.25 0 0 0 19.75 4zM3.5 9.5h7v7.75c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25zm0-1.5V6.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75V8zm2.25 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="psqhfm61d"/>`,
		"fallback": "fluent:desk-24-regular",
	});
}

export default Component;
