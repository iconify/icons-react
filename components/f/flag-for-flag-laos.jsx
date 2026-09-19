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
		"content": `<style>.pf5tm9xhl {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 2c9.61 0 18.104 4.868 23.148 12.266H8.852C13.897 8.868 22.39 4 32 4m9.834 28c0 5.431-4.402 9.833-9.834 9.833S22.167 37.431 22.167 32S26.57 22.167 32 22.167c5.432-.001 9.834 4.401 9.834 9.833M32 60c-9.611 0-18.104-4.868-23.148-12.268h46.297C50.104 55.132 41.611 60 32 60");
}
</style><path class="pf5tm9xhl"/>`,
		"fallback": "emojione-monotone:flag-for-flag-laos",
	});
}

export default Component;
