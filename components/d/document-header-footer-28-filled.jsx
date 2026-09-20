import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pv8w07f6o {
  fill: currentColor;
  d: path("M21.25 2A2.75 2.75 0 0 1 24 4.75v18.5A2.75 2.75 0 0 1 21.25 26H6.75A2.75 2.75 0 0 1 4 23.25V4.75A2.75 2.75 0 0 1 6.75 2zM9 19a1.5 1.5 0 0 0 0 3h10a1.5 1.5 0 0 0 0-3zM9 6a1.5 1.5 0 1 0 0 3h10a1.5 1.5 0 0 0 0-3z");
}
</style><path class="pv8w07f6o"/>`,
		"fallback": "fluent:document-header-footer-28-filled",
	});
}

export default Component;
