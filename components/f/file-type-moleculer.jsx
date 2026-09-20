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
		"content": `<style>.dafvgjqpz {
  fill: var(--svg-color--3cafce, #3cafce);
  d: path("M30 24.137a5.022 5.022 0 1 1-9.17-2.827l-2.669-2.538a4.047 4.047 0 0 1-6.136-1.452l-3.179 1.4a3.484 3.484 0 1 1-.454-1.1l3.308-1.212a4.074 4.074 0 0 1 3.991-4.962a4 4 0 0 1 1.248.215l1.672-3.169a2.828 2.828 0 1 1 .8.3L18 12.167a4.06 4.06 0 0 1 .971 5.784l2.851 2.308A5 5 0 0 1 30 24.137");
}
</style><path class="dafvgjqpz"/>`,
		"fallback": "vscode-icons:file-type-moleculer",
	});
}

export default Component;
