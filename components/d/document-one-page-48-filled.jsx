import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ki_zdgbir {
  fill: currentColor;
  d: path("M35.75 4A4.25 4.25 0 0 1 40 8.25v31.5A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75V8.25A4.25 4.25 0 0 1 12.25 4zm-19.5 28a1.25 1.25 0 1 0 0 2.5h15.5a1.25 1.25 0 1 0 0-2.5zm0-9a1.25 1.25 0 1 0 0 2.5h15.5a1.25 1.25 0 1 0 0-2.5zm0-9a1.25 1.25 0 1 0 0 2.5h15.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="ki_zdgbir"/>`,
		"fallback": "fluent:document-one-page-48-filled",
	});
}

export default Component;
