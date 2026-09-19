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

.z4sklfmwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.83 25.342a3.835 3.835 0 0 1 3.835-3.835h0a3.835 3.835 0 0 1 3.835 3.835v2.493a3.835 3.835 0 0 1-3.836 3.836h0a3.835 3.835 0 0 1-3.835-3.836m0 3.836V16.329m-7 7.671a3.835 3.835 0 1 1 0 7.67H13.5V16.33h6.328a3.835 3.835 0 1 1 0 7.67m0 0H13.5");
}
</style><circle class="cpk0fnbgt"/><path class="z4sklfmwq"/>`,
		"fallback": "arcticons:beebom",
	});
}

export default Component;
