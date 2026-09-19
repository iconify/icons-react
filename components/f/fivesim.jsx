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
		"content": `<style>.mz5gbnbua {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.662 23.34c2.79-1.562 5.557-2.594 8.545-3.121M30.85 6.533l-2.308 14.042M15.064 5.5L22.6 20.865M6.665 16.213L17.92 25M5.793 29.945l10.473.894m1.268 6.785c4.112 7.618 17.087 5.362 20.182-.298c1.34-2.452.099-6.58-3.766-7.165c-1.803-.274-2.362-1.244-2.762-3.096");
}
</style><path class="mz5gbnbua"/>`,
		"fallback": "arcticons:fivesim",
	});
}

export default Component;
