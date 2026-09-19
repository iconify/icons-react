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

.msrycbc9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.545 22.46c4.753-.988 13.572-2.962 20.91-3.114");
}

.poey6b6jp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.242 12.5c-1.613 4.509-7.971 23-7.971 23m16.917-22.628c-2.36 8.804-7.396 22.288-7.396 22.288");
}
</style><circle class="cpk0fnbgt"/><path class="poey6b6jp"/><path class="msrycbc9n"/>`,
		"fallback": "arcticons:1byone-health",
	});
}

export default Component;
