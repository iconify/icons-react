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
		"content": `<style>.vzhsnld0w {
  fill: var(--svg-color--005f91, #005f91);
  d: path("M23 19.418a6.971 6.971 0 1 1-.05-6.918l6.093-3.509a14 14 0 1 0 .036 13.95Z");
}
</style><path class="vzhsnld0w"/>`,
		"fallback": "vscode-icons:file-type-c2",
	});
}

export default Component;
