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
		"content": `<style>.z_xpqbc6m {
  fill: var(--svg-color--d8563a, #d8563a);
  d: path("M24.2 7.34c-.09-1.7-.1-3.51-.03-5.34H6.93c1.28 2.32 1.15 2.64 1.3 6.63v13.78c-.08 5.12-.32 5.97-1.3 7.59h17.63q.15-3.1.51-6.68c-1.45 2.12-2.08 3.26-6.95 3.26h-4.2v-8.91h3.65c4.2-.07 4.85 1.17 5.73 1.8a48 48 0 0 1 0-6.95c-1.73 1.57-2.84 1.7-5.73 1.77h-3.65V5.42h4.6c2.71.03 4.27.47 5.69 1.92");
}
</style><path class="z_xpqbc6m"/>`,
		"fallback": "vscode-icons:file-type-edge",
	});
}

export default Component;
