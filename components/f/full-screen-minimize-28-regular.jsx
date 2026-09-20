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
		"content": `<style>.le_jszbcj {
  fill: currentColor;
  d: path("M9.25 3a.75.75 0 0 1 .75.75v3.5A2.75 2.75 0 0 1 7.25 10H3.754a.75.75 0 1 1 0-1.5H7.25c.69 0 1.25-.56 1.25-1.25v-3.5A.75.75 0 0 1 9.25 3m9.5 0a.75.75 0 0 1 .75.75v3.5c0 .69.56 1.25 1.25 1.25h3.5a.75.75 0 0 1 0 1.5h-3.5A2.75 2.75 0 0 1 18 7.25v-3.5a.75.75 0 0 1 .75-.75M3.004 18.75a.75.75 0 0 1 .75-.75H7.25A2.75 2.75 0 0 1 10 20.75v3.5a.75.75 0 0 1-1.5 0v-3.5c0-.69-.56-1.25-1.25-1.25H3.754a.75.75 0 0 1-.75-.75m14.996 2A2.75 2.75 0 0 1 20.75 18h3.5a.75.75 0 0 1 0 1.5h-3.5c-.69 0-1.25.56-1.25 1.25v3.5a.75.75 0 0 1-1.5 0z");
}
</style><path class="le_jszbcj"/>`,
		"fallback": "fluent:full-screen-minimize-28-regular",
	});
}

export default Component;
