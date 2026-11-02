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
		"content": `<style>.imzo_mbvb {
  fill: currentColor;
  d: path("M20 10h-9a5.08 5.08 0 0 0-3.048 1.028a5.5 5.5 0 0 0-1.901 2.656a1.001 1.001 0 0 0 1.898.632C8.391 12.991 9.573 12 11 12h10.103c.165.765.092 1.577-.154 2.316l-1 3C19.237 19.452 17.281 21 15 21H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5c.265 0 .52.105.707.293L12.414 5H15a5 5 0 0 1 5 5");
}
</style><path class="imzo_mbvb"/>`,
		"fallback": "coolicons:folder-open-fill-round",
	});
}

export default Component;
