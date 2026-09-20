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
		"content": `<style>.jb8wjgbaw {
  fill: var(--svg-color--fbc02d, #fbc02d);
  d: path("M9.012 2h13.967q-2.787 5.6-5.593 11.194q2.8.014 5.6.009q-4.9 8.4-9.794 16.8c-.019-4.192-.009-8.375-.009-12.567c-1.391 0-2.782 0-4.173-.009Z");
}
</style><path class="jb8wjgbaw"/>`,
		"fallback": "vscode-icons:file-type-bolt",
	});
}

export default Component;
