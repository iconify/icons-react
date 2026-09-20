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
		"content": `<style>.ne1g67b2h {
  fill: currentColor;
  d: path("M3 6.25a.75.75 0 0 0 1.5 0v-.5c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 0 0 1.5 0v-.5A2.75 2.75 0 0 0 18.25 3H5.75A2.75 2.75 0 0 0 3 5.75zM3.75 10a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75m16.5 0a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.75-.75M3 20.25c0 .414.336.75.75.75h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0-.75.75m.75-1.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5z");
}
</style><path class="ne1g67b2h"/>`,
		"fallback": "fluent:border-top-bottom-double-24-regular",
	});
}

export default Component;
