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
		"content": `<style>.dmbb0_y-c {
  fill: var(--svg-color--28a3b2, #28a3b2);
  d: path("M4.6 30S-6.108 12.967 15.925 2v28zm14.737 0V12.645S22.853 18.381 30 30z");
}
</style><path class="dmbb0_y-c"/>`,
		"fallback": "vscode-icons:file-type-sails",
	});
}

export default Component;
