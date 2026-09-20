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
		"content": `<style>.y_vv6qbyf {
  fill: currentColor;
  d: path("M7 22v-5H2V7h5V2h10v5h5v10h-5v5zM4 11h5.525l1.175 1.75l1.35-4.3h1.775l1.7 2.55H20V9h-5V4H9v5H4zm5 9h6v-5h5v-2h-5.55l-1.15-1.75l-1.35 4.325h-1.8L8.45 13H4v2h5zm3-8");
}
</style><path class="y_vv6qbyf"/>`,
		"fallback": "material-symbols:health-metrics-outline-sharp",
	});
}

export default Component;
