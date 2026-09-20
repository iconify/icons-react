import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hamluwbgi {
  fill: currentColor;
  d: path("M6.5 20.5v-3h-3v-1h3v-4h-3v-1h3v-4h-3v-1h3v-3h1v3h4v-3h1v3h4v-3h1v3h3v1h-3v4h3v1h-3v4h3v1h-3v3h-1v-3h-4v3h-1v-3h-4v3zm1-4h4v-4h-4zm5 0h4v-4h-4zm-5-5h4v-4h-4zm5 0h4v-4h-4z");
}
</style><path class="hamluwbgi"/>`,
		"fallback": "material-symbols-light:grid-4x4",
	});
}

export default Component;
