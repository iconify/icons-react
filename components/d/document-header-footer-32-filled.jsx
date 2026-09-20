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
		"content": `<style>.rwzu13b9h {
  fill: currentColor;
  d: path("M24.75 2A3.25 3.25 0 0 1 28 5.25v21.5A3.25 3.25 0 0 1 24.75 30H7.25A3.25 3.25 0 0 1 4 26.75V5.25A3.25 3.25 0 0 1 7.25 2zM10.5 21a2 2 0 1 0 0 4h11a2 2 0 1 0 0-4zm0-14a2 2 0 1 0 0 4h11a2 2 0 1 0 0-4z");
}
</style><path class="rwzu13b9h"/>`,
		"fallback": "fluent:document-header-footer-32-filled",
	});
}

export default Component;
