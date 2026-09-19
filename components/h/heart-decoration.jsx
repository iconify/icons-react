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
		"content": `<style>.kssnc_6tj {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 48c-1.371-1.814-20.53-12.883-16.602-25.218c3.53-11.073 15.094-6.597 16.602-.594c1.094-5.635 12.949-10.694 16.604.584C52.529 36.908 33.367 48.557 32 50");
}
</style><path class="kssnc_6tj"/>`,
		"fallback": "emojione-monotone:heart-decoration",
	});
}

export default Component;
