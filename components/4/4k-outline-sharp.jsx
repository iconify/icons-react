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
		"content": `<style>.vbj5imbts {
  fill: currentColor;
  d: path("M13 15h1.5v-2.25L16.25 15h1.825l-2.325-3l2.325-3H16.25l-1.75 2.25V9H13zm-3.5 0H11v-1.5h1V12h-1V9H9.5v3H8V9H6.5v4.5h3zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="vbj5imbts"/>`,
		"fallback": "material-symbols:4k-outline-sharp",
	});
}

export default Component;
