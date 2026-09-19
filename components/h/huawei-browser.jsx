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

.tfso-xifj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.793 37.1L9.434 26.965l9.562-12.494c1.837-2.4 4.111-2.442 6.502-1.147l13.068 7.075l-29.131 6.566");
}
</style><circle class="cpk0fnbgt"/><path class="tfso-xifj"/>`,
		"fallback": "arcticons:huawei-browser",
	});
}

export default Component;
