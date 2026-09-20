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
		"content": `<style>.jhsw_mbnz {
  fill: currentColor;
  d: path("M235.38 53.86A4 4 0 0 0 232 52H40a4 4 0 0 0-2.83 6.83L82.34 104l-45.17 45.17A4 4 0 0 0 40 156h140l-31.56 66.28a4 4 0 0 0 1.89 5.33a3.9 3.9 0 0 0 1.67.39a4 4 0 0 0 3.61-2.28l80-168a4 4 0 0 0-.23-3.86M183.76 148H49.66l41.17-41.17a4 4 0 0 0 0-5.66L49.66 60h176Z");
}
</style><path class="jhsw_mbnz"/>`,
		"fallback": "ph:flag-banner-thin",
	});
}

export default Component;
