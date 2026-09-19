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
		"content": `<style>.pz1xg0bcs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.63 45.05L26 28.19l10.54 4l2.37-6.29l-10.55-4l3.9-10.36l-6.3-2.37L22 19.53l-10.54-4l-2.33 6.33l10.54 4l-6.33 16.82");
}

.uhno83b8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.34 42.68a21.48 21.48 0 1 1 6.29 2.37");
}
</style><path class="uhno83b8l"/><path class="pz1xg0bcs"/>`,
		"fallback": "arcticons:breviary",
	});
}

export default Component;
