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
		"content": `<style>.ddvlz3sxc {
  fill: var(--svg-color--de5fe9, #de5fe9);
  d: path("m2.02 2.3l.11 24.75a2.84 2.84 0 0 0 2.77 2.77l18.8-.08a2.84 2.84 0 0 0 2.78-2.77h1.28v2.77h2.18l-.12-27.71l-12.87.05l.06 10.89v6.93h-2.28l.06-6.83l-.06-10.89z");
}
</style><path class="ddvlz3sxc"/>`,
		"fallback": "vscode-icons:file-type-uv",
	});
}

export default Component;
