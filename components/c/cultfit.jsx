import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q_yizpn1r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.796 24.09h34.408m-17.21-12.283c1.878 0 3.405 1.538 3.405 3.427c0 1.9-1.527 3.439-3.405 3.439s-3.393-1.539-3.393-3.439c0-1.889 1.516-3.427 3.393-3.427M14.21 40.344l9.784-10.338l9.795 10.338M24 37.54v5.96m0-35.21V4.5M9.539 14.33l6.334 4.218M9.697 33.705l6.176-4.196m16.118-10.825l6.47-4.23m-6.47 15.054l6.176 4.163");
}
</style><path class="q_yizpn1r"/>`,
		"fallback": "arcticons:cultfit",
	});
}

export default Component;
