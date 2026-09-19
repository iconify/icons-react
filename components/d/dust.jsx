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
		"content": `<style>.tuoue9bhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.756 4.5h20.488v15.215H13.756zm0 23.785h20.488V43.5H13.756z");
}
</style><path class="tuoue9bhe"/>`,
		"fallback": "arcticons:dust",
	});
}

export default Component;
