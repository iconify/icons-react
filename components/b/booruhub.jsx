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
		"content": `<style>.waw07sncv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.42 24H4.49m39 0H26.776m-16.715-3H4.49m5.571 6H4.49m5.571 3H4.49m5.571-12H4.49m27.857-3h-5.571m5.571 3h-5.571m5.571 3h-5.571m5.571 6h-5.571m5.571 3h-5.571m5.591 3h-5.571M43.49 15h-5.57m5.57 3h-5.57m5.57 3h-5.57m5.57 6h-5.57m5.57 3h-5.57m5.59 3h-5.57M21.204 21h-5.571m5.571 6h-5.571m5.571 3h-5.571m5.571-12h-5.571m2.787-3H4.49m13.93 18H4.49");
}
</style><path class="waw07sncv"/>`,
		"fallback": "arcticons:booruhub",
	});
}

export default Component;
