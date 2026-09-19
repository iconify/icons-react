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

.hg70yubxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.452 24a5.25 5.25 0 0 1 0 10.5h-5.347v-21h5.347a5.25 5.25 0 0 1 0 10.5m0 0h-5.347m-7.557 0a5.25 5.25 0 1 0 0 10.5h5.347v-21h-5.347a5.25 5.25 0 0 0 0 10.5m0 0h5.347");
}
</style><circle class="cpk0fnbgt"/><path class="hg70yubxt"/>`,
		"fallback": "arcticons:bluebot",
	});
}

export default Component;
