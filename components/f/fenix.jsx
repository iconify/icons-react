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
		"content": `<style>.eshapq_dl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.479 5.5c-12.895 8.908-36.526.583-36.886 19.446l-.072 12.56c-.04 7.099 16.047 7.642 16.61-5.057c4.495-.727 8.71-2.064 9.563-10.756c12.162-1.41 7.326-10.732 10.785-16.194M5.593 24.946l26.1-3.253M22.13 32.449L5.538 34.706");
}
</style><path class="eshapq_dl"/>`,
		"fallback": "arcticons:fenix",
	});
}

export default Component;
