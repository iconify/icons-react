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
		"content": `<style>.j_epn9bhs {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-5v3h14v-3h-4.8q-.425.45-.987.725T12 17t-1.213-.275T9.8 16zm7.713-1.287Q13 14.425 13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15t.713-.288M5 14h4q0-1.25.875-2.125T12 11t2.125.875T15 14h4V5H5zm0 5h14z");
}
</style><path class="j_epn9bhs"/>`,
		"fallback": "material-symbols:bottom-app-bar-outline-sharp",
	});
}

export default Component;
