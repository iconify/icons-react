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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q54_pabfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.608 10.173H24c-7.637 0-13.827 6.19-13.827 13.827S16.363 37.827 24 37.827c6.211 0 11.466-4.095 13.211-9.733c.427 6.05-3.077 12.711-7.34 16.594");
}
</style><circle class="cpk0fnbgt"/><path class="q54_pabfk"/>`,
		"fallback": "arcticons:apgwynedd",
	});
}

export default Component;
