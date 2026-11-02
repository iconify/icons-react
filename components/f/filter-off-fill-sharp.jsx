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
		"content": `<style>.rgviecc5u {
  fill: currentColor;
  d: path("m4.707 1.293l14 14a.999.999 0 1 1-1.414 1.414L15 14.414V18a1 1 0 0 1-.553.894l-4 2A1 1 0 0 1 9 20v-7.586L3.293 6.707A1 1 0 0 1 3 6V4a1 1 0 0 1 .649-.936l-.356-.357a.999.999 0 1 1 1.414-1.414M9.243 3H20a1 1 0 0 1 1 1v2c0 .265-.105.52-.293.707l-3.879 3.879Z");
}
</style><path class="rgviecc5u"/>`,
		"fallback": "coolicons:filter-off-fill-sharp",
	});
}

export default Component;
