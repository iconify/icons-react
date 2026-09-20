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
		"content": `<style>.wrr-q8bdo {
  fill: currentColor;
  d: path("M24 4H12.25A4.25 4.25 0 0 0 8 8.25v31.5A4.25 4.25 0 0 0 12.25 44h23.5A4.25 4.25 0 0 0 40 39.75V20H28.25A4.25 4.25 0 0 1 24 15.75zm15.626 13.5a4.3 4.3 0 0 0-.87-1.263L27.762 5.245a4.3 4.3 0 0 0-1.263-.871V15.75c0 .966.784 1.75 1.75 1.75z");
}
</style><path class="wrr-q8bdo"/>`,
		"fallback": "fluent:document-48-filled",
	});
}

export default Component;
