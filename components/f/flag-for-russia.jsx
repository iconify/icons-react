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
		"content": `<style>.wojbwyb9r {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M6.254 43a28 28 0 0 1-.679-1.756h52.85A28 28 0 0 1 57.746 43zM32 4c11.917 0 22.112 7.486 26.147 18H5.854C9.888 11.486 20.083 4 32 4");
}
</style><path class="wojbwyb9r"/>`,
		"fallback": "emojione-monotone:flag-for-russia",
	});
}

export default Component;
