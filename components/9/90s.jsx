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

.s74c2ibzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.46 22.207L18.532 11.28c-1.38-.796-3.105.2-3.105 1.793v21.854c0 1.594 1.725 2.59 3.105 1.793L37.46 25.793c1.38-.797 1.38-2.789 0-3.585Z");
}
</style><path class="s74c2ibzl"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:90s",
	});
}

export default Component;
