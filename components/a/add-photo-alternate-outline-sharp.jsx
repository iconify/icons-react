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
		"content": `<style>.krh9v2bjr {
  fill: currentColor;
  d: path("M4 20V4h8.616v1H5v14h14v-7.615h1V20zm2.77-3.616h10.46L14 12.077l-3 3.789l-2-2.404zM17 9V7h-2V6h2V4h1v2h2v1h-2v2z");
}
</style><path class="krh9v2bjr"/>`,
		"fallback": "material-symbols-light:add-photo-alternate-outline-sharp",
	});
}

export default Component;
