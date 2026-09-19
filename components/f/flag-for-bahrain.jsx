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
		"content": `<style>.d8cpqnqrk {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M4 32C4 17.61 14.912 5.727 28.895 4.176L35.934 8.4L26.1 14.3l9.833 5.9l-9.833 5.9l9.833 5.9l-9.833 5.9l9.833 5.899L26.1 49.7l9.833 5.899l-7.042 4.224C14.911 58.271 4 46.389 4 32");
}
</style><path class="d8cpqnqrk"/>`,
		"fallback": "emojione-monotone:flag-for-bahrain",
	});
}

export default Component;
