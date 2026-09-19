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
		"content": `<style>.e63a8hawz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 9.328h33.172V42.5z");
}

.pkxya9b-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.603 5.5H42.5v31.897");
}
</style><path class="e63a8hawz"/><path class="pkxya9b-c"/>`,
		"fallback": "arcticons:cosmosdirekt",
	});
}

export default Component;
