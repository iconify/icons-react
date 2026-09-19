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
		"content": `<style>.b35eibb4k {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m28 30H24v26.829q-.93-.277-1.833-.616V5.787A27.9 27.9 0 0 1 32 4c15.439 0 28 12.561 28 28");
}
</style><path class="b35eibb4k"/>`,
		"fallback": "emojione-monotone:flag-for-benin",
	});
}

export default Component;
