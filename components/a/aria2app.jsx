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
		"content": `<style>.odm8f5bwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.116 26.932h17.768m4.616-8.329L23.999 43.5L10.5 18.603M24 21.427V4.5");
}
</style><path class="odm8f5bwi"/>`,
		"fallback": "arcticons:aria2app",
	});
}

export default Component;
