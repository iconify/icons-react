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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.syih9rb8c {
  d: path("M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25zm2.25-.75a.75.75 0 0 0-.75.75v6h6.75V4.5h-6zm7.5 0v6.75h6.75v-6a.75.75 0 0 0-.75-.75h-6zm6.75 8.25h-6.75v6.75h6a.75.75 0 0 0 .75-.75v-6zm-8.25 6.75v-6.75H4.5v6c0 .414.336.75.75.75h6z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="syih9rb8c"/></g>`,
		"fallback": "fluent:gallery-24-regular",
	});
}

export default Component;
