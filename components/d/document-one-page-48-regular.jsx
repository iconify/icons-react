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
		"content": `<style>.a27gwn1hl {
  fill: currentColor;
  d: path("M35.75 4A4.25 4.25 0 0 1 40 8.25v31.5A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75V8.25A4.25 4.25 0 0 1 12.25 4zm-23.5 2.5a1.75 1.75 0 0 0-1.75 1.75v31.5c0 .967.784 1.75 1.75 1.75h23.5a1.75 1.75 0 0 0 1.75-1.75V8.25a1.75 1.75 0 0 0-1.75-1.75zM31.75 32a1.25 1.25 0 1 1 0 2.5h-15.5a1.25 1.25 0 1 1 0-2.5zm0-9a1.25 1.25 0 1 1 0 2.5h-15.5a1.25 1.25 0 1 1 0-2.5zm0-9a1.25 1.25 0 1 1 0 2.5h-15.5a1.25 1.25 0 1 1 0-2.5z");
}
</style><path class="a27gwn1hl"/>`,
		"fallback": "fluent:document-one-page-48-regular",
	});
}

export default Component;
