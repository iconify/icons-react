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
		"content": `<style>.fm0q-bbhn {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32c0 16.569 13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 58C16.537 60 4 47.465 4 32S16.537 4 32 4c15.465 0 28 12.536 28 28S47.465 60 32 60");
}
</style><path class="fm0q-bbhn"/>`,
		"fallback": "emojione-monotone:full-moon",
	});
}

export default Component;
