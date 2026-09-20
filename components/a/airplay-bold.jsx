import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a_ff6v7xe {
  fill: currentColor;
  d: path("M137.11 152.19a12 12 0 0 0-18.22 0l-48 56A12 12 0 0 0 80 228h96a12 12 0 0 0 9.11-19.81Zm-31 51.81L128 178.44L149.91 204ZM236 64v112a28 28 0 0 1-28 28h-4a12 12 0 0 1 0-24h4a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4h4a12 12 0 0 1 0 24h-4a28 28 0 0 1-28-28V64a28 28 0 0 1 28-28h160a28 28 0 0 1 28 28");
}
</style><path class="a_ff6v7xe"/>`,
		"fallback": "ph:airplay-bold",
	});
}

export default Component;
