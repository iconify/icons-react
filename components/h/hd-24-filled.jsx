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
		"content": `<style>.v3j0ezehk {
  fill: currentColor;
  d: path("M14.5 14.5v-5h.25c.966 0 1.75.784 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75zM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm1 5a.75.75 0 0 1 .75.75v2.75h2V8.75a.75.75 0 0 1 1.5 0v6.5a.75.75 0 0 1-1.5 0V13H8v2.25a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.25 8m6.5 0h1A3.25 3.25 0 0 1 18 11.25v1.5A3.25 3.25 0 0 1 14.75 16h-1a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 .75-.75");
}
</style><path class="v3j0ezehk"/>`,
		"fallback": "fluent:hd-24-filled",
	});
}

export default Component;
