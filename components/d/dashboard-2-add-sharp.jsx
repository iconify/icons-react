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
		"content": `<style>.wygk3lbni {
  fill: currentColor;
  d: path("M2 20h7v-7H2zm0-9h10V4H2zm9 9h11v-7H11zm7-9q-2.075 0-3.537-1.463T13 6t1.463-3.537T18 1t3.538 1.463T23 6t-1.463 3.538T18 11m-.5-2h1V6.5H21v-1h-2.5V3h-1v2.5H15v1h2.5z");
}
</style><path class="wygk3lbni"/>`,
		"fallback": "material-symbols:dashboard-2-add-sharp",
	});
}

export default Component;
