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
		"content": `<style>.jkdk1hauy {
  cx: 23.999px;
  cy: 24px;
  r: 8.6px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z26r2pb_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.898 45.301C9.026 43.188 1.538 33.161 2.6 22.137S12.925 2.699 24 2.699s20.338 8.414 21.4 19.438s-6.426 21.051-17.298 23.164");
}
</style><path class="z26r2pb_g"/><circle class="jkdk1hauy"/>`,
		"fallback": "arcticons:gojek",
	});
}

export default Component;
