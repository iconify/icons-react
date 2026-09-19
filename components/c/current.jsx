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
		"content": `<style>.ppzywzizx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.774 5.5H21.941l-4.89 10.478h15.833zm-6.459 22.162a7.2 7.2 0 0 1-7.059 5.786c-3.972 0-7.211-3.239-7.211-7.211V15.98H5.93v9.924c0 9.163 8.111 16.596 18.132 16.596c9.357 0 17.066-6.506 18.008-14.838z");
}
</style><path class="ppzywzizx"/>`,
		"fallback": "arcticons:current",
	});
}

export default Component;
