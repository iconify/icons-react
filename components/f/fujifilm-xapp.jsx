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
		"content": `<style>.etxyfqbwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 34.113h-3.4a3.63 3.63 0 0 1-2.033-.622L9.933 14.51a3.63 3.63 0 0 0-2.033-.622H4.5");
}

.pqwl-zijb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 34.113h3.4c.725 0 1.433-.216 2.033-.622L38.067 14.51a3.63 3.63 0 0 1 2.032-.622H43.5");
}
</style><path class="etxyfqbwi"/><path class="pqwl-zijb"/>`,
		"fallback": "arcticons:fujifilm-xapp",
	});
}

export default Component;
