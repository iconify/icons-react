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
		"content": `<style>.dfslthb6n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.602 14.704c-1.934 2.232-4.76 2.95-6.315 1.606c-1.554-1.344-1.246-4.243.688-6.475s4.761-2.95 6.315-1.606h0c1.554 1.344 1.246 4.243-.688 6.475");
}

.ezv04-ban {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.552 19.984C10.662 12.438 22.233.039 32.84 4.41s10.079 21.322 6.968 28.868c-3.511 8.52-13.84 13.747-22.98 9.98c-9.14-3.768-12.786-14.754-9.275-23.274");
}
</style><path class="ezv04-ban"/><path class="dfslthb6n"/>`,
		"fallback": "arcticons:dragon-cave",
	});
}

export default Component;
