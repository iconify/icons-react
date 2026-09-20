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
		"content": `<style>.ryp8keb5v {
  fill: currentColor;
  d: path("M8 17.013Q6.5 15.025 6.5 12T8 6.988T12 5t4 1.988T17.5 12T16 17.013T12 19t-4-1.987m6.475-1.563q.825-1.5.825-3.45t-.825-3.45T12 7.05t-2.475 1.5T8.7 12t.825 3.45T12 16.95t2.475-1.5");
}
</style><path class="ryp8keb5v"/>`,
		"fallback": "material-symbols:exposure-zero-rounded",
	});
}

export default Component;
