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
		"content": `<style>.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}

.tcef6hblu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33 9.5l-1.5 2l2.5 1s-1.6.5-3 1c-.9.3-4.5 9-3 12c1 2 5.2 3.9-10.8 7.9c.4 1.1.8 2.1.8 2.1s-1 2-4 3");
}
</style><path class="tcef6hblu"/><path class="ll0g54h-q"/>`,
		"fallback": "arcticons:brouter",
	});
}

export default Component;
