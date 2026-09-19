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
		"content": `<style>.eqd1vpbfy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 24H12.798L4.5 7.404h30.702zm-30.702 0L4.5 40.596h30.702L43.5 24");
}
</style><path class="eqd1vpbfy"/>`,
		"fallback": "arcticons:cimb-bank-ph",
	});
}

export default Component;
