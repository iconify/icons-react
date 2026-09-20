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
		"content": `<style>.ulysfv10g {
  fill: var(--svg-color--d61e3b, #d61e3b);
  d: path("M21.88 2h-4c-4 0-8.07 3-8.07 9.62a8.33 8.33 0 0 0 4.14 7.66L9 28.13a1.25 1.25 0 0 0 0 1.27a1.21 1.21 0 0 0 1 .6h2.49a1.24 1.24 0 0 0 1.2-.75l4.59-9h.34v8.62a1.14 1.14 0 0 0 1.2 1.13H22a1.12 1.12 0 0 0 1.16-1.06V3.22A1.19 1.19 0 0 0 22 2ZM18.7 16.28h-.59c-2.3 0-3.66-1.87-3.66-5c0-3.9 1.73-5.29 3.34-5.29h.94Z");
}
</style><path class="ulysfv10g"/>`,
		"fallback": "vscode-icons:file-type-yandex",
	});
}

export default Component;
