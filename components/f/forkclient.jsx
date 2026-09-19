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
		"content": `<style>.p0bcuccct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.22 17.78l7.06-7.06M25 12.56l7.07-7.06M35.44 23l7.06-7.07M35.44 23A7.38 7.38 0 0 1 25 12.56M5.5 42.5L25 23");
}
</style><path class="p0bcuccct"/>`,
		"fallback": "arcticons:forkclient",
	});
}

export default Component;
