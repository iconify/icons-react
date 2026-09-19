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
		"content": `<style>.cveld1krg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.28 13.419A21.506 21.506 0 0 0 24 45.5a22 22 0 0 0 2.657-.163M42.72 34.583A21.506 21.506 0 0 0 24 2.5a22 22 0 0 0-2.658.163");
}

.qnyeb7xtw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.046 15.954a11.378 11.378 0 1 0 0 16.092");
}
</style><path class="cveld1krg"/><path class="qnyeb7xtw"/>`,
		"fallback": "arcticons:cdiscount",
	});
}

export default Component;
