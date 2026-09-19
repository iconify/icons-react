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

.n6--u6bxe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.238 31.34c-.615 2.436-1.974 4.155-4.228 5.044c-2.623 1.036-5.305 1.025-7.931-.002c-1.95-.762-3.26-2.204-3.964-4.181c-.09-.253-.136-.521-.222-.86z");
}
</style><circle class="cpk0fnbgt"/><path class="n6--u6bxe"/>`,
		"fallback": "arcticons:funimation",
	});
}

export default Component;
