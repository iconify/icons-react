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
		"content": `<style>.v_j_vxtdy {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm15.55-5.05L3 11.525V4.25l2.4.675L6.6 8.4l3.45.975L9.175.8l2.875.85l3.2 9.225l4.3 1.225q.625.2 1.038.725t.412 1.2q0 .875-.712 1.537t-1.738.388");
}
</style><path class="v_j_vxtdy"/>`,
		"fallback": "material-symbols:flight-land",
	});
}

export default Component;
