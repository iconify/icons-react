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
		"content": `<style>.szquu4vkp {
  fill: var(--svg-color--fff, #fff);
  d: path("M16.42 7.32h7v7h-7z");
}

.z9gni8buk {
  cx: 16px;
  cy: 16px;
  r: 14px;
  fill: var(--svg-color--00aab4, #00aab4);
}
</style><circle class="z9gni8buk"/><path class="szquu4vkp"/>`,
		"fallback": "vscode-icons:file-type-teal",
	});
}

export default Component;
