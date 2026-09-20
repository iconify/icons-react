import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n_-l_67wi {
  fill: currentColor;
  d: path("M16.5 22v-3H14l3.5-5v3H20zM7 22V4h3V2h4v2h3v8q-.525 0-1.025.088T15 12.35V6H9v12h2q0 1.15.4 2.175T12.525 22z");
}
</style><path class="n_-l_67wi"/>`,
		"fallback": "material-symbols:battery-charging-20-outline-sharp",
	});
}

export default Component;
