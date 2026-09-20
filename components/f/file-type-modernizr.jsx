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
		"content": `<style>.zfrji9ixy {
  fill: var(--svg-color--d91b77, #d91b77);
  d: path("M2 22.72v-4.48h4.48v-4.48h4.48V9.28h4.48v13.44m1.12-13.44A13.44 13.44 0 0 1 30 22.72H16.56z");
}
</style><path class="zfrji9ixy"/>`,
		"fallback": "vscode-icons:file-type-modernizr",
	});
}

export default Component;
