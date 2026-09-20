import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bqdp-2klb {
  fill: currentColor;
  d: path("M6 6h8v7.782l-2.802-2.788a1.7 1.7 0 0 0-2.396 0L6 13.782zm5.5 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-1.007 4.203L12.802 14H7.198l2.309-2.297a.7.7 0 0 1 .986 0M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z");
}
</style><path class="bqdp-2klb"/>`,
		"fallback": "fluent:image-border-20-filled",
	});
}

export default Component;
