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
		"content": `<style>.eq9e4ib8r {
  fill: currentColor;
  d: path("M2 3.75A.75.75 0 0 1 2.75 3h6.5a2.25 2.25 0 0 1 2.25 2.25V11h6.25A2.25 2.25 0 0 1 20 13.25v6.25h1.25a.75.75 0 0 1 0 1.5h-6.5a2.25 2.25 0 0 1-2.25-2.25V12.5H6.25A2.25 2.25 0 0 1 4 10.25V4.5H2.75A.75.75 0 0 1 2 3.75M18.5 19.5v-6.25a.75.75 0 0 0-.75-.75H14v6.25c0 .414.336.75.75.75zM10 5.25a.75.75 0 0 0-.75-.75H5.5v5.75c0 .414.336.75.75.75H10z");
}
</style><path class="eq9e4ib8r"/>`,
		"fallback": "fluent:data-waterfall-24-regular",
	});
}

export default Component;
