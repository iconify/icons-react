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
		"content": `<style>.xg27w1b8s {
  fill: currentColor;
  d: path("m6.77 17.58l6 2.42V6.38L6.77 4zm-1 .697V3h1.038l6.961 2.717V21.49zm7-.277v-1h4.46V4H6.809V3H18.23v15zm-6-.42V4z");
}
</style><path class="xg27w1b8s"/>`,
		"fallback": "material-symbols-light:dual-screen-outline-sharp",
	});
}

export default Component;
