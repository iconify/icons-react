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
		"content": `<style>.hmmvy0odq {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M76 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m52 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m52 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="hmmvy0odq"/>`,
		"fallback": "ph:dots-nine-fill",
	});
}

export default Component;
