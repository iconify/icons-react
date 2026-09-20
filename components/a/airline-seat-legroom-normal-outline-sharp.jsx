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
		"content": `<style>.x4vrpkbut {
  fill: currentColor;
  d: path("M16 21v-7H6V3h6v6h7v9h3v3zm-2-4H3V3h2v12h9z");
}
</style><path class="x4vrpkbut"/>`,
		"fallback": "material-symbols:airline-seat-legroom-normal-outline-sharp",
	});
}

export default Component;
