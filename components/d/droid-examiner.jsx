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
		"content": `<style>.i5p7pm-xd {
  cx: 21.688px;
  cy: 21.688px;
  r: 16.188px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q9_rxbc2n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.134 33.134L42.5 42.5");
}
</style><circle class="i5p7pm-xd"/><path class="q9_rxbc2n"/>`,
		"fallback": "arcticons:droid-examiner",
	});
}

export default Component;
