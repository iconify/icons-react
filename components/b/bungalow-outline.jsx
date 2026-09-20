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
		"content": `<style>.t78rnv9yz {
  fill: currentColor;
  d: path("M7 21v-6.2l-1.1 1.75l-1.7-1.05L12 3l7.8 12.5l-1.7 1.05L17 14.8V21zm2-2h2v-3h2v3h2v-7.4l-3-4.8l-3 4.8zm2-5v-2h2v2zm-2 5h6z");
}
</style><path class="t78rnv9yz"/>`,
		"fallback": "material-symbols:bungalow-outline",
	});
}

export default Component;
