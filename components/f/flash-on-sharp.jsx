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
		"content": `<style>.bv_x3jbnr {
  fill: currentColor;
  d: path("M11 18.846V13H8.385V3h7.288L14 8.789h3.904z");
}
</style><path class="bv_x3jbnr"/>`,
		"fallback": "material-symbols-light:flash-on-sharp",
	});
}

export default Component;
