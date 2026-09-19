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
		"content": `<style>.e1n9j0ncc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.522 22.793h28.956V42.5H9.522z");
}

.n0zj0mbta {
  cx: 24px;
  cy: 32.647px;
  r: 3.016px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nu00wacyl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.348 15.152c0-5.33 4.321-9.652 9.652-9.652s9.652 4.321 9.652 9.652v7.641");
}
</style><path class="nu00wacyl"/><circle class="n0zj0mbta"/><path class="e1n9j0ncc"/>`,
		"fallback": "arcticons:emoji-lock-open",
	});
}

export default Component;
