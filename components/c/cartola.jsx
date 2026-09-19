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
		"content": `<style>.inkgmu70s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.742 31.657l.556-5.225l1.778-16.584H11.119l1.751 17.168l.475 4.641m22.626 6.495l-27.846-1.69L5.5 31.661h37zm-1.673-11.72l-21.428.584");
}
</style><path class="inkgmu70s"/>`,
		"fallback": "arcticons:cartola",
	});
}

export default Component;
