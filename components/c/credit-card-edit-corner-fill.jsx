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
		"content": `<style>.jdt0eso7u {
  fill: currentColor;
  d: path("M22 8H2V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Zm-12 2v9a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3v-7Zm2 11v-3c0-.265.105-.52.293-.707l5-5a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 16 22h-3a1 1 0 0 1-1-1");
}
</style><path class="jdt0eso7u"/>`,
		"fallback": "coolicons:credit-card-edit-corner-fill",
	});
}

export default Component;
