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
		"content": `<style>.kaq0fibbj {
  fill: var(--svg-color--121212, #121212);
  d: path("M13.2 16a2.8 2.8 0 1 0-5.6 0a2.8 2.8 0 0 0 5.6 0m-5.6 5.59a2.8 2.8 0 1 0-5.6 0a2.8 2.8 0 0 0 5.6 0m22.4 0a2.8 2.8 0 1 0-5.6 0a2.8 2.8 0 0 0 5.6 0");
}

.z-42b4bkz {
  fill: var(--svg-color--f44250, #f44250);
  d: path("M24.4 16a2.78 2.78 0 0 1-2.8 2.8a2.8 2.8 0 0 0-2.8 2.79a2.78 2.78 0 0 1-2.8 2.8a2.8 2.8 0 1 1 0-5.6a2.8 2.8 0 1 0 0-5.58a2.8 2.8 0 1 1 2.8-2.8a2.78 2.78 0 0 0 2.8 2.8A2.8 2.8 0 0 1 24.4 16");
}
</style><path class="z-42b4bkz"/><path class="kaq0fibbj"/>`,
		"fallback": "vscode-icons:file-type-light-reactrouter",
	});
}

export default Component;
