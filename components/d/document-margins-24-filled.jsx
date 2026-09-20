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
		"content": `<style>.dans89brd {
  fill: currentColor;
  d: path("M15.5 2h-7v4.25a.75.75 0 0 1-1.5 0V2h-.75A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22H7v-4.25a.75.75 0 0 1 1.5 0V22h7v-4.25a.75.75 0 0 1 1.5 0V22h.75A2.25 2.25 0 0 0 20 19.75V4.25A2.25 2.25 0 0 0 17.75 2H17v4.25a.75.75 0 0 1-1.5 0zM7.75 8.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m9.25.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 1.5 0");
}
</style><path class="dans89brd"/>`,
		"fallback": "fluent:document-margins-24-filled",
	});
}

export default Component;
