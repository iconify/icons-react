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
		"content": `<style>.to64g7pjj {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M20 6.707a28 28 0 0 1 2-.854v52.294a29 29 0 0 1-2-.854zM37.254 40L32 36.246L26.746 40l1.984-6.105l-5.23-3.785l6.479-.018L32 24l2.021 6.092l6.479.018l-5.232 3.785zM42 58.147V5.853C52.514 9.888 60 20.083 60 32s-7.486 22.112-18 26.147");
}
</style><path class="to64g7pjj"/>`,
		"fallback": "emojione-monotone:flag-for-cameroon",
	});
}

export default Component;
