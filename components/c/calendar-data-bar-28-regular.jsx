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
		"content": `<style>.fdxbtgbho {
  fill: currentColor;
  d: path("M21.75 3A3.25 3.25 0 0 1 25 6.25v9.8a2.5 2.5 0 0 0-1.5.158V9.503h-19V21.75c0 .966.784 1.75 1.75 1.75H14V25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v1.753h19V6.25a1.75 1.75 0 0 0-1.75-1.75M20.5 14a1.5 1.5 0 0 0-1.5 1.5v10a1.5 1.5 0 0 0 3 0v-10a1.5 1.5 0 0 0-1.5-1.5m-4 6a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 3 0v-4a1.5 1.5 0 0 0-1.5-1.5m6.5-1.5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 1-3 0z");
}
</style><path class="fdxbtgbho"/>`,
		"fallback": "fluent:calendar-data-bar-28-regular",
	});
}

export default Component;
