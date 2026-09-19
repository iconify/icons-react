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
		"content": `<style>.bimsi3l4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.014 30.5v-13h4.256c2.406 0 4.356 1.955 4.356 4.366s-1.95 4.366-4.356 4.366h-4.256M13.374 17.5v13m8.612-13v13m-8.612-6.524h8.612");
}

.g2wj9jbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4");
}
</style><path class="g2wj9jbhp"/><path class="bimsi3l4y"/>`,
		"fallback": "arcticons:heavypaint",
	});
}

export default Component;
