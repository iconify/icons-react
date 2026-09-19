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
		"content": `<style>.c2p1n6d6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.5 21.5v5m5-11.5v18m5-14v10m5-19v28m5-19v10m5-7.5v5");
}
</style><path class="c2p1n6d6v"/>`,
		"fallback": "arcticons:gravadordevoz",
	});
}

export default Component;
