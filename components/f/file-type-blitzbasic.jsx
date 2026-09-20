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
		"content": `<style>.qpg4oeblx {
  fill: var(--svg-color--00d8ff, #00d8ff);
  d: path("M16 9v3h1v7h-1v3h10v-1h1v-1h1v-4h-1v-1h1v-4h-1v-1h-1V9zm5 3h2v2h-2zm0 5h2v2h-2z");
}

.wfoh7qbpo {
  fill: var(--svg-color--00ffae, #00ffae);
  d: path("M4 9v3h1v7H4v3h10v-1h1v-1h1v-4h-1v-1h1v-4h-1v-1h-1V9zm6 3h2v2h-2zm0 5h2v2h-2z");
}
</style><path class="wfoh7qbpo"/><path class="qpg4oeblx"/>`,
		"fallback": "vscode-icons:file-type-blitzbasic",
	});
}

export default Component;
