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
		"content": `<style>.zo8tfg9af {
  fill: currentColor;
  d: path("M8.116 15.885h7.769v-5.77h-2v-2h-3.77v2h-2zm2.769-5.77v-1.23h2.23v1.23zM8 18q-2.507 0-4.253-1.745Q2 14.509 2 12.004t1.747-4.255T8 6h8q2.507 0 4.254 1.745T22 11.996t-1.747 4.255T16 18z");
}
</style><path class="zo8tfg9af"/>`,
		"fallback": "material-symbols-light:business-chip-sharp",
	});
}

export default Component;
