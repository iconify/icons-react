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
		"content": `<style>.wqo7gubfp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 5.519L26.746 42.48l-2.555-18.347L5.5 21.502z");
}
</style><path class="wqo7gubfp"/>`,
		"fallback": "arcticons:gps-setter",
	});
}

export default Component;
