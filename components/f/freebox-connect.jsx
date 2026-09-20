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
		"content": `<style>.cxpegodzi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.065 36.026a6.474 6.474 0 1 1-12.948 0a6.474 6.474 0 0 1 12.948 0");
}

.l7pnqhb8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.042 37.244v.03a2.45 2.45 0 1 1-4.902 0v-2.497a2.45 2.45 0 1 1 4.902 0v.03M8.6 42.5l13.947-27.972c2.47-4.955 9.052-11.01 16.852-8.4M11.587 18.119h20.194");
}
</style><path class="cxpegodzi"/><path class="l7pnqhb8s"/>`,
		"fallback": "arcticons:freebox-connect",
	});
}

export default Component;
