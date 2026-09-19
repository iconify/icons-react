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
		"content": `<style>.n-ryoo0nb {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M9.551 48.717a28 28 0 0 1-2.45-3.934H56.9a28 28 0 0 1-2.45 3.934zm44.897-33.434a28 28 0 0 1 2.45 3.934H7.102a28 28 0 0 1 2.45-3.934zM29.05 32c0 5.974-4.844 10.817-10.816 10.817c-5.975 0-10.816-4.843-10.816-10.817s4.842-10.817 10.816-10.817c5.972 0 10.816 4.842 10.816 10.817");
}

.ra6tw8qce {
  fill: currentColor;
  d: path("m16.362 29.795l-5.995.018l4.842 3.721l-1.839 6.003l4.863-3.691l4.863 3.691l-1.842-6.003l4.846-3.721l-5.998-.018l-1.869-5.99z");
}
</style><path class="ra6tw8qce"/><path class="n-ryoo0nb"/>`,
		"fallback": "emojione-monotone:flag-for-flag-north-korea",
	});
}

export default Component;
