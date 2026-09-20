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
		"content": `<style>.afgnajbqz {
  fill: currentColor;
  d: path("M151.11 166.13a38 38 0 1 0-46.22 0A65.75 65.75 0 0 0 75.2 188.4a6 6 0 0 0 9.6 7.2a54 54 0 0 1 86.4 0a6 6 0 0 0 9.6-7.2a65.75 65.75 0 0 0-29.69-22.27M128 110a26 26 0 1 1-26 26a26 26 0 0 1 26-26m72-84H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m2 190a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2ZM90 64a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6");
}
</style><path class="afgnajbqz"/>`,
		"fallback": "ph:identification-badge-light",
	});
}

export default Component;
