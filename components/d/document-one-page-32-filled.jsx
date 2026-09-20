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
		"content": `<style>.o9buj6mkp {
  fill: currentColor;
  d: path("M24.75 2A3.25 3.25 0 0 1 28 5.25v21.5A3.25 3.25 0 0 1 24.75 30H7.25A3.25 3.25 0 0 1 4 26.75V5.25A3.25 3.25 0 0 1 7.25 2zM10 22a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm0-7a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm0-7a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2z");
}
</style><path class="o9buj6mkp"/>`,
		"fallback": "fluent:document-one-page-32-filled",
	});
}

export default Component;
