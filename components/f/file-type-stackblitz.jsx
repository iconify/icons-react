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
		"content": `<style>.xvaihfybl {
  fill: var(--svg-color--2196f3, #2196f3);
  d: path("M6.3 18.8h8.2L9.9 30l15.8-16.8h-8.2L22.1 2z");
}
</style><path class="xvaihfybl"/>`,
		"fallback": "vscode-icons:file-type-stackblitz",
	});
}

export default Component;
