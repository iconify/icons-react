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
		"content": `<style>.oqn3le1se {
  cx: 24px;
  cy: 24px;
  r: 7.1px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.y1ebrztoe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 16.9l-20.293-.001A21.5 21.5 0 0 0 2.5 24c0 11.874 9.626 21.5 21.5 21.5S45.5 35.874 45.5 24h0c0-11.874-9.626-21.5-21.5-21.5H13.25");
}

.zz52fwbrr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.59 16.896A14.3 14.3 0 0 0 9.7 24c0 7.898 6.402 14.3 14.3 14.3S38.3 31.898 38.3 24h0c0-7.897-6.402-14.3-14.3-14.3H8.478");
}
</style><path class="zz52fwbrr"/><circle class="oqn3le1se"/><path class="y1ebrztoe"/>`,
		"fallback": "arcticons:cowrywise",
	});
}

export default Component;
