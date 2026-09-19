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
		"content": `<style>.m1s45cgre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.86 42.5l.544-36.456h9.25v4.897h4.897v5.441h4.898v-5.44h4.897V5.5h9.794v37h-9.794V26.72h-4.897v4.898H21.55l.011-4.952l-4.363.055V42.5z");
}
</style><path class="m1s45cgre"/>`,
		"fallback": "arcticons:clozemaster",
	});
}

export default Component;
