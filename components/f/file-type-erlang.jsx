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
		"content": `<style>.qa_1u-j9r {
  fill: var(--svg-color--a2003e, #a2003e);
  d: path("M6.388 23.867a11 11 0 0 1-3.441-8.234a10.77 10.77 0 0 1 2.864-7.5H2v15.73Zm20.066 0a16.4 16.4 0 0 0 2.537-3.136l-4.218-1.873a8.3 8.3 0 0 1-6.641 4.12c-4.359-.014-6.072-3.329-6.063-7.584H28.36a6.5 6.5 0 0 0 0-.935a9.06 9.06 0 0 0-2.029-6.326H30v15.73h-3.544ZM12.332 11.742a3.723 3.723 0 0 1 3.9-3.23a3.29 3.29 0 0 1 3.532 3.23Z");
}
</style><path class="qa_1u-j9r"/>`,
		"fallback": "vscode-icons:file-type-erlang",
	});
}

export default Component;
