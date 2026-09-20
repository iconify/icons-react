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
		"content": `<style>.nrmk-0-rj {
  fill: currentColor;
  d: path("M3 21V5.8L5.3 3h13.4L21 5.8v2.325l-5 5V8H8v8l4-2l2.075 1.05L12 17.1V21zm11 0v-3.075l6.575-6.55l3.075 3.05L17.075 21zm6.575-5.6l.925-.975l-.925-.925l-.95.95zM5.4 6h13.2l-.85-1H6.25z");
}
</style><path class="nrmk-0-rj"/>`,
		"fallback": "material-symbols:box-edit-sharp",
	});
}

export default Component;
