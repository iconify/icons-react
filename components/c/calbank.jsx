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
		"content": `<style>.kyibch0sy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.039 40.432h15.444a6.11 6.11 0 0 0 5.295-3.057L42.5 24H27.056a6.11 6.11 0 0 0-5.295 3.057");
}

.w--xm_23t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.015 7.57L14.042 40.43L6.319 27.054a6.11 6.11 0 0 1 0-6.114l7.72-13.372z");
}
</style><path class="w--xm_23t"/><path class="kyibch0sy"/>`,
		"fallback": "arcticons:calbank",
	});
}

export default Component;
