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
		"content": `<style>.gp648yq7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.167 5.5v24.667H42.5V17.833zm0 0H5.5m24.667 3.083H5.5m24.667 3.084H5.5m24.667 3.083H5.5m24.667 3.083H5.5m24.667 12.334H5.5m33.917 3.083H5.5m30.833 3.083H5.5m27.75 3.084H5.5M30.167 42.5H5.5");
}
</style><path class="gp648yq7k"/>`,
		"fallback": "arcticons:duca",
	});
}

export default Component;
