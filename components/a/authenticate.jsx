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

.rontpgnkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.17 3.42L15.49 18.83a4.3 4.3 0 0 0-1.58 5.87h0a4.3 4.3 0 0 0 5.88 1.58l7.9-4.56a4.29 4.29 0 0 1 5.87 1.58h0A4.29 4.29 0 0 1 32 29.17L5.31 44.58");
}
</style><circle class="cpk0fnbgt"/><path class="rontpgnkq"/>`,
		"fallback": "arcticons:authenticate",
	});
}

export default Component;
