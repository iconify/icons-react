import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.utdnk0-xb {
  fill: currentColor;
  d: path("M4 4.707V9.5a.5.5 0 0 0 1 0V5.707l10 10V16a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 1.905-1.388l1.241 1.242a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708zm11 8.172l.61.61A.5.5 0 0 0 16 13v-1a.5.5 0 0 0-1 0zM4.648 2.527l.708.708A1 1 0 0 1 6 3h4v3.5A1.5 1.5 0 0 0 11.5 8H15v1.5a.5.5 0 0 0 1 0V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6c-.521 0-.996.2-1.352.527m6.352.68L14.793 7H11.5a.5.5 0 0 1-.5-.5zM4.5 11.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m0 3.5a.5.5 0 0 1 .5.5v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 .5-.5M9 18a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z");
}
</style><path class="utdnk0-xb"/>`,
		"fallback": "fluent:document-split-hint-off-20-regular",
	});
}

export default Component;
