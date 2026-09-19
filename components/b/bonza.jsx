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
		"content": `<style>.j_mrucc6d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.926 7.382l-9.287 5.362l9.287 5.362l-9.287 5.362l9.287 5.362L43.5 18.106zM13.538 24.74L4.5 29.894l18.574 10.724l9.037-5.154z");
}
</style><path class="j_mrucc6d"/>`,
		"fallback": "arcticons:bonza",
	});
}

export default Component;
