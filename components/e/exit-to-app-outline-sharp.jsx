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
		"content": `<style>.y4ai9n91c {
  fill: currentColor;
  d: path("M3 21v-6h2v4h14V5H5v4H3V3h18v18zm7.5-4l-1.4-1.45L11.65 13H3v-2h8.65L9.1 8.45L10.5 7l5 5z");
}
</style><path class="y4ai9n91c"/>`,
		"fallback": "material-symbols:exit-to-app-outline-sharp",
	});
}

export default Component;
