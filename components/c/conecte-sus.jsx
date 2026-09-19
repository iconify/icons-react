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
		"content": `<style>.ongm625kf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 24a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 1 6.5 6.5a6.5 6.5 0 0 0-6.5 6.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 0-6.5-6.5a6.5 6.5 0 1 1 6.5-6.5");
}

.zgdfdvcvt {
  cx: 24px;
  cy: 11px;
  r: 6.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="zgdfdvcvt"/><path class="ongm625kf"/>`,
		"fallback": "arcticons:conecte-sus",
	});
}

export default Component;
