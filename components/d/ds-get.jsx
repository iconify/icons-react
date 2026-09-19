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
		"content": `<style>.mw3wh8btr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.947 19.718l9.173-.05V6.742l15.477.233V19.67h9.456L24.21 37.904zM5.5 41.26h37");
}
</style><path class="mw3wh8btr"/>`,
		"fallback": "arcticons:ds-get",
	});
}

export default Component;
