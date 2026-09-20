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
		"content": `<style>.wc9lydbuk {
  fill: currentColor;
  d: path("M21 12.022V8.5H3v9.25A3.25 3.25 0 0 0 6.25 21h5.772A6.5 6.5 0 0 1 21 12.022m0-5.772A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25V7h18zm2 11.25a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-6-3a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0zm1.125 6a.625.625 0 1 1-1.25 0a.625.625 0 0 1 1.25 0");
}
</style><path class="wc9lydbuk"/>`,
		"fallback": "fluent:calendar-error-24-filled",
	});
}

export default Component;
