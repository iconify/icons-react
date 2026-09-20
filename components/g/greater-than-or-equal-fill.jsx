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
		"content": `<style>.vo49e_25u {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 152H80a8 8 0 0 1 0-16h104a8 8 0 0 1 0 16m2.35-64.35l-104 32a8 8 0 1 1-4.7-15.3L156.8 112L77.65 87.65a8 8 0 0 1 4.7-15.3l104 32a8 8 0 0 1 0 15.3");
}
</style><path class="vo49e_25u"/>`,
		"fallback": "ph:greater-than-or-equal-fill",
	});
}

export default Component;
