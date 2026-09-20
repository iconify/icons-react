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
		"content": `<style>.aubhryb9n {
  fill: currentColor;
  d: path("M14 22v-3.075l6.575-6.55l3.075 3.05L17.075 22zm6.575-5.6l.925-.975l-.925-.925l-.95.95zM2 20V4h8l2 2h10v2.1l-10 10V20z");
}
</style><path class="aubhryb9n"/>`,
		"fallback": "material-symbols:bookmark-manager-sharp",
	});
}

export default Component;
