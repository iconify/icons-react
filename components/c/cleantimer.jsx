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
		"content": `<style>.mgjy47b4j {
  cx: 24px;
  cy: 25.548px;
  r: 17.952px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.oa0suj73v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 25.548V16.88M16.571 4.5H31.43m5.037 8.13l2.482-2.482l2.476 2.476l-2.68 2.68");
}
</style><circle class="mgjy47b4j"/><path class="oa0suj73v"/>`,
		"fallback": "arcticons:cleantimer",
	});
}

export default Component;
