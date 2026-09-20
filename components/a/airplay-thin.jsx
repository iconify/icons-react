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
		"content": `<style>.qnybtq_ed {
  fill: currentColor;
  d: path("M131 157.4a4 4 0 0 0-6.07 0l-48 56a4 4 0 0 0 3 6.6h96a4 4 0 0 0 3-6.6ZM88.7 212l39.3-45.85L167.3 212ZM228 64v112a20 20 0 0 1-20 20h-8a4 4 0 0 1 0-8h8a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h8a4 4 0 0 1 0 8h-8a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20");
}
</style><path class="qnybtq_ed"/>`,
		"fallback": "ph:airplay-thin",
	});
}

export default Component;
