import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.buh4oqbeo {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M10.322 49.699a27.9 27.9 0 0 1-5.691-11.8h54.738a27.9 27.9 0 0 1-5.691 11.8zM24.919 32l-6.686-4.616L11.548 32l2.523-7.505l-6.654-4.651l8.243-.022l2.573-7.488l2.571 7.488l8.245.022l-6.66 4.651zM32 26.1V14.3h21.677a27.9 27.9 0 0 1 5.692 11.8z");
}
</style><path class="buh4oqbeo"/>`,
		"fallback": "emojione-monotone:flag-for-flag-togo",
	});
}

export default Component;
