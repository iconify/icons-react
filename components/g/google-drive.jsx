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
		"content": `<style>.gpk3rkzww {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.338 11.09l2.892 5.01L30 23.43H9.544l7.124-12.34c3.26-5.647 11.41-5.647 14.67 0");
}

.h8ki_mb6o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.018 41.145h-5.784l-4.232-7.33l10.226-17.713l7.125 12.34c3.26 5.646-.815 12.703-7.335 12.703M9.54 23.428h8.463l10.228 17.714H13.982c-6.52 0-10.594-7.058-7.335-12.704z");
}
</style><path class="h8ki_mb6o"/><path class="gpk3rkzww"/>`,
		"fallback": "arcticons:google-drive",
	});
}

export default Component;
