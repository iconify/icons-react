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
		"content": `<style>.lvbp2hz5f {
  fill: var(--svg-color--2ea98e, #2ea98e);
  d: path("M11.616 7.986A1.56 1.56 0 0 0 10.16 7h-.06a1.56 1.56 0 0 0-1.456.986L2 25h3.806l1.015-2.834h6.621L14.457 25h3.8Zm-3.672 10.97l2.188-6.111l2.188 6.116Zm15.885 2.715V7.129H20.3v15.618A2.346 2.346 0 0 0 22.57 25H30v-3.328Z");
}
</style><path class="lvbp2hz5f"/>`,
		"fallback": "vscode-icons:file-type-al",
	});
}

export default Component;
