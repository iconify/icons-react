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
		"content": `<style>.kcsvgablb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.33 34.669A21.51 21.51 0 0 1 8.796 8.797L24 24L8.797 39.203A21.497 21.497 0 1 0 13.33 5.33");
}
</style><path class="kcsvgablb"/>`,
		"fallback": "arcticons:business-suite",
	});
}

export default Component;
