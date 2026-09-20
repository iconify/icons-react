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
		"content": `<style>.la1gpn_xz {
  fill: currentColor;
  d: path("M7.25 2A3.25 3.25 0 0 0 4 5.25v13.5A3.25 3.25 0 0 0 7.25 22h9.5A3.25 3.25 0 0 0 20 18.75V5.25A3.25 3.25 0 0 0 16.75 2zM5.5 5.25c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v13.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75zM8 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z");
}
</style><path class="la1gpn_xz"/>`,
		"fallback": "fluent:document-border-24-filled",
	});
}

export default Component;
