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
		"content": `<style>.rqbbopv3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 4.5l16 8.05v22.9l-16 8l-16-8V28l16 8l9.42-4.75v-8L24 28L8 20v-7.45Zm0 7.42l-8.62 4.34L24 20.61l8.62-4.35Z");
}
</style><path class="rqbbopv3y"/>`,
		"fallback": "arcticons:gag",
	});
}

export default Component;
