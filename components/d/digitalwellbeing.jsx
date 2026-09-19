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
		"content": `<style>.vm3xwac1u {
  cx: 24px;
  cy: 11.06px;
  r: 6.47px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xkexnkbrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15 34.34l12-12.29a6.31 6.31 0 0 1 9.15 0a6.65 6.65 0 0 1 0 9.15C32.05 35.42 24 43.59 24 43.59s-8-8.28-12.07-12.39a6.4 6.4 0 0 1 0-9.15a6.63 6.63 0 0 1 9.15 0l12.06 12.29");
}
</style><circle class="vm3xwac1u"/><path class="xkexnkbrx"/>`,
		"fallback": "arcticons:digitalwellbeing",
	});
}

export default Component;
