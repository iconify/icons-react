import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w32tiyynj {
  fill: currentColor;
  d: path("M18 16.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m1.5-2.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-14-.25a.75.75 0 0 1 .75-.75H8v-1.75a.75.75 0 0 1 1.5 0V13h1.75a.75.75 0 0 1 0 1.5H9.5v1.751a.75.75 0 0 1-1.5 0V14.5H6.25a.75.75 0 0 1-.75-.75M2 14a8.5 8.5 0 0 1 8.5-8.5h7a8.5 8.5 0 1 1 0 17h-7A8.5 8.5 0 0 1 2 14m8.5-7a7 7 0 1 0 0 14h7a7 7 0 1 0 0-14z");
}
</style><path class="w32tiyynj"/>`,
		"fallback": "fluent:games-28-regular",
	});
}

export default Component;
