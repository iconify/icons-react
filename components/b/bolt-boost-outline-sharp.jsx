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
		"content": `<style>.w16cinbyf {
  fill: currentColor;
  d: path("m13 21l1-7H7.975L16 3h1l-1 7h6.025L14 21zM3 18v-2h8.7l-.3 2zm-1-5v-2h5.7l-1.45 2zm2-5V6h7.35L9.9 8z");
}
</style><path class="w16cinbyf"/>`,
		"fallback": "material-symbols:bolt-boost-outline-sharp",
	});
}

export default Component;
