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
		"content": `<style>.bxodpsb0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 15.73v23.72m6.5-26.9v26.9M17.5 19v20.45M24 8.55v30.9M30.5 15v24.45m6.5-17.9v17.9M43.5 11v28.45");
}
</style><path class="bxodpsb0t"/>`,
		"fallback": "arcticons:biblio",
	});
}

export default Component;
