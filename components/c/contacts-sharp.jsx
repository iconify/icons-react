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
		"content": `<style>.tg_x-cbev {
  fill: currentColor;
  d: path("M4.5 21.385v-1h15v1zm0-17.77v-1h15v1zM11.998 14q1.04 0 1.771-.728t.731-1.77t-.728-1.771T12.002 9t-1.771.729t-.731 1.769t.729 1.771t1.769.731M3 19V5h18v14zm4.058-1h9.884q-1.125-1.016-2.36-1.508T12 16t-2.583.492T7.057 18");
}
</style><path class="tg_x-cbev"/>`,
		"fallback": "material-symbols-light:contacts-sharp",
	});
}

export default Component;
