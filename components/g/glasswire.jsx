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

.fqvqo5ath {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.51 23.52c12.6 0 23.24 9.93 33.63 9.93a44 44 0 0 0 7.54-.78");
}

.h2u3fo91f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.12 41.24c10.66-2.81 16.86-23 31.73-27.59");
}
</style><circle class="cpk0fnbgt"/><path class="fqvqo5ath"/><path class="h2u3fo91f"/>`,
		"fallback": "arcticons:glasswire",
	});
}

export default Component;
