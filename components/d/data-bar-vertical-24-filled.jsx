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
		"content": `<style>.a822_8igi {
  fill: currentColor;
  d: path("M5.75 3a2.25 2.25 0 0 1 2.248 2.25v13.5a2.25 2.25 0 1 1-4.498 0V5.25A2.25 2.25 0 0 1 5.75 3m6.5 4a2.25 2.25 0 0 1 2.248 2.25v9.5a2.25 2.25 0 1 1-4.498 0v-9.5A2.25 2.25 0 0 1 12.25 7m6.5 4a2.25 2.25 0 0 1 2.248 2.25v5.5a2.25 2.25 0 1 1-4.498 0v-5.5A2.25 2.25 0 0 1 18.75 11");
}
</style><path class="a822_8igi"/>`,
		"fallback": "fluent:data-bar-vertical-24-filled",
	});
}

export default Component;
