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
		"content": `<style>.yhdi-4buw {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 2c9.61 0 18.104 4.868 23.148 12.267H8.852C13.896 8.868 22.39 4 32 4m23.148 43.733H8.852A27.83 27.83 0 0 1 4 32h56a27.83 27.83 0 0 1-4.852 15.733");
}
</style><path class="yhdi-4buw"/>`,
		"fallback": "emojione-monotone:flag-for-mauritius",
	});
}

export default Component;
