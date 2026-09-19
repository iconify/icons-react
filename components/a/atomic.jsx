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
		"content": `<style>.s799_-ilf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.06 5.96L12.7 42.04M35.61 5.96l-6.36 36.08M7.41 15.71H43.5m-39 16.5h36.09");
}
</style><path class="s799_-ilf"/>`,
		"fallback": "arcticons:atomic",
	});
}

export default Component;
