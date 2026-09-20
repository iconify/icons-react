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
		"content": `<style>.nyhiu2wqu {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m16-100a12 12 0 1 1-12-12a12 12 0 0 1 12 12m20-12a12 12 0 1 1 12-12a12 12 0 0 1-12 12m20 28a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="nyhiu2wqu"/>`,
		"fallback": "ph:bowling-ball",
	});
}

export default Component;
