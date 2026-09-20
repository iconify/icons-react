import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c3e7v-q8o {
  fill: currentColor;
  d: path("M7.038 16.963Q5 14.925 5 12t2.038-4.962T12 5t4.963 2.038T19 12t-2.037 4.963T12 19t-4.962-2.037");
}
</style><path class="c3e7v-q8o"/>`,
		"fallback": "material-symbols:fiber-manual-record-sharp",
	});
}

export default Component;
