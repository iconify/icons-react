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
		"content": `<style>.kjqmeuchd {
  fill: var(--svg-color--86b918, #86b918);
  d: path("M16 24.8L7.2 16L16 7.2l2.93 2.93L13.07 16L16 18.93l8.8-8.8l-7.67-7.66a1.6 1.6 0 0 0-2.26 0l-12.4 12.4a1.6 1.6 0 0 0 0 2.26l12.4 12.4a1.6 1.6 0 0 0 2.26 0l12.4-12.4a1.6 1.6 0 0 0 0-2.26l-1.8-1.8z");
}
</style><path class="kjqmeuchd"/>`,
		"fallback": "vscode-icons:file-type-epub",
	});
}

export default Component;
