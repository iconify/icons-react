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
		"content": `<style>.lmh6m6n2i {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m27.445 24.452c.304 1.501.479 3.046.531 4.622L15.334 9.528a28 28 0 0 1 3.949-2.461zM14.808 52.441l19.026-19.027L35.249 32l-1.415-1.414l-19.026-19.027v-.063L57.293 32L14.808 52.505zm4.475 4.493a28 28 0 0 1-3.949-2.462l44.642-21.546a28 28 0 0 1-.531 4.622z");
}
</style><path class="lmh6m6n2i"/>`,
		"fallback": "emojione-monotone:flag-for-guyana",
	});
}

export default Component;
