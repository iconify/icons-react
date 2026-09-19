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
		"content": `<style>.p88ps52_s {
  fill: currentColor;
  d: path("m19 15l-6 6l-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9z");
}
</style><path class="p88ps52_s"/>`,
		"fallback": "ic:baseline-subdirectory-arrow-right",
	});
}

export default Component;
