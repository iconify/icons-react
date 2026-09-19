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
		"content": `<style>.gmxt364bx {
  cx: 24px;
  cy: 40.23px;
  r: 3.34px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.huq2su-yu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.8 4.58v16a9.2 9.2 0 0 0 18.4 0v-16M24 33.86v-4.09");
}
</style><path class="huq2su-yu"/><circle class="gmxt364bx"/>`,
		"fallback": "arcticons:curiositystream",
	});
}

export default Component;
