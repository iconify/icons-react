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
		"content": `<style>.mzi911bqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.898 9.483h36.204m-16.376 6.196H11.209L16.432 42.5h15.579l3.188-16.376h-5.437l2.371-10.445m8.729-6.196L39.535 5.5H8.908L7.58 9.483m15.668 16.641H13.243");
}
</style><path class="mzi911bqt"/>`,
		"fallback": "arcticons:finshots",
	});
}

export default Component;
