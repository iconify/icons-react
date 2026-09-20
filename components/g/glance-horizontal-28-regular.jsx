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
		"content": `<style>.kw_gkcofw {
  fill: currentColor;
  d: path("M3 5.75A2.75 2.75 0 0 1 5.75 3h6.5A2.75 2.75 0 0 1 15 5.75v4.5A2.75 2.75 0 0 1 12.25 13h-6.5A2.75 2.75 0 0 1 3 10.25zM5.75 4.5c-.69 0-1.25.56-1.25 1.25v4.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-4.5c0-.69-.56-1.25-1.25-1.25zM18 5.75A2.75 2.75 0 0 1 20.75 3h1.5A2.75 2.75 0 0 1 25 5.75v4.5A2.75 2.75 0 0 1 22.25 13h-1.5A2.75 2.75 0 0 1 18 10.25zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v4.5c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25v-4.5c0-.69-.56-1.25-1.25-1.25zM5.75 15A2.75 2.75 0 0 0 3 17.75v4.5A2.75 2.75 0 0 0 5.75 25h1.5A2.75 2.75 0 0 0 10 22.25v-4.5A2.75 2.75 0 0 0 7.25 15zM4.5 17.75c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25zm8.5 0A2.75 2.75 0 0 1 15.75 15h6.5A2.75 2.75 0 0 1 25 17.75v4.5A2.75 2.75 0 0 1 22.25 25h-6.5A2.75 2.75 0 0 1 13 22.25zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v4.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-4.5c0-.69-.56-1.25-1.25-1.25z");
}
</style><path class="kw_gkcofw"/>`,
		"fallback": "fluent:glance-horizontal-28-regular",
	});
}

export default Component;
