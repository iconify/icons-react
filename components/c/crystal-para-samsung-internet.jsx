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
		"content": `<style>.ygalvrb-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.75 14.25L24 4.5l-9.75 9.75v19.5L24 43.5l9.75-9.75z");
}
</style><path class="ygalvrb-n"/>`,
		"fallback": "arcticons:crystal-para-samsung-internet",
	});
}

export default Component;
