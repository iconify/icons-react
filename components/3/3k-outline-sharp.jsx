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
		"content": `<style>.z0d1q5bpp {
  fill: currentColor;
  d: path("M13 15h1.5v-2.25L16.25 15h1.825l-2.325-3l2.325-3H16.25l-1.75 2.25V9H13zm-6.5 0H11V9H6.5v1.5h3v1h-2v1h2v1h-3zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="z0d1q5bpp"/>`,
		"fallback": "material-symbols:3k-outline-sharp",
	});
}

export default Component;
