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
		"content": `<style>.e69pfu9yz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.085 19.826v19.006c0 2.363 2.981 4.84 5.34 4.669c2.748-.2 5.37-3.525 5.37-6.278V4.491");
}

.oc6lpdnwg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.699 8.565l3.096-4.074l2.976 2.822m5.49 8.015v25.306m0-25.306l6.05-1.09c3.442-.621 4.33 3.616 4.564 6.161c.256 2.786-.69 7.023-3.684 7.541l-6.93 1.2");
}
</style><path class="e69pfu9yz"/><path class="oc6lpdnwg"/>`,
		"fallback": "arcticons:healthup",
	});
}

export default Component;
