import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yp00b2b8v {
  fill: currentColor;
  d: path("M16.28 3.22a.75.75 0 0 0-1.06 1.06l3.22 3.22h-7.69a4.25 4.25 0 0 0-4.25 4.25V20A.75.75 0 0 0 8 20v-8.25A2.75 2.75 0 0 1 10.75 9h7.689l-3.22 3.22a.75.75 0 0 0 1.061 1.06l4.5-4.5a.75.75 0 0 0 0-1.06z");
}
</style><path class="yp00b2b8v"/>`,
		"fallback": "fluent:arrow-turn-right-24-regular",
	});
}

export default Component;
