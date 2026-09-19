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
		"content": `<style>.aty6t9b0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.3v20.8l5 4.6h34V15.9l-5-4.6zm16.3 18.2h5.9m-5.9-11.9h5.9m-5.9 6h3.8m-3.8-6v11.9");
}

.xkn3l-blz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.4 29.5V17.6h1.9c3.3 0 5.9 2.7 5.9 5.9h0c0 3.3-2.7 5.9-5.9 5.9h-1.9zm-20.6 0V17.6h3.8c2.2 0 4 1.8 4 4s-1.8 4-4 4H9.8m4-.1l3.8 4");
}
</style><path class="aty6t9b0d"/><path class="xkn3l-blz"/>`,
		"fallback": "arcticons:cyberpunk-red-companion",
	});
}

export default Component;
