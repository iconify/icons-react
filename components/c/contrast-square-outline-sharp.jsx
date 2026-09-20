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
		"content": `<style>.lrje8sbpu {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5zm.5-10h2v2H9V9h2V7.5H9v-2H7.5v2h-2zm11.525 7h-5v-1.5h5z");
}
</style><path class="lrje8sbpu"/>`,
		"fallback": "material-symbols:contrast-square-outline-sharp",
	});
}

export default Component;
