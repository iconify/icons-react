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
		"content": `<style>.c0yzzqiva {
  fill: var(--svg-color--f2994a, #f2994a);
  d: path("m14.035 21.961l-1.884 1.884v5.977H6.917V2h5.234v15.415l1.014-1.3l5.017-5.887h6.285l-7.082 8.169l7.7 11.429H19.07Z");
}
</style><path class="c0yzzqiva"/>`,
		"fallback": "vscode-icons:file-type-k",
	});
}

export default Component;
