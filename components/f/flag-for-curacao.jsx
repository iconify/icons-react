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
		"content": `<style>.q8rmurfwu {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M10.323 49.7a28 28 0 0 1-3.707-5.9h50.768a28 28 0 0 1-3.707 5.9zm17.131-11.331l-4.479-3.254l-4.479 3.254l1.71-5.265l-4.479-3.256h5.537l1.712-5.264l1.709 5.264h5.537l-4.479 3.256zm-16.888-18.85l1.218-3.749l1.218 3.749h3.94l-3.188 2.313l1.218 3.747l-3.188-2.315l-3.188 2.315l1.218-3.747l-2.954-2.145l.087-.169h3.619z");
}
</style><path class="q8rmurfwu"/>`,
		"fallback": "emojione-monotone:flag-for-curacao",
	});
}

export default Component;
