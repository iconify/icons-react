import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h88nld02a {
  fill: currentColor;
  d: path("M4.5 10a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m5 5a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-3-5A1.5 1.5 0 0 1 10 3.5V5h2.5A1.5 1.5 0 0 1 14 6.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5A1.5 1.5 0 0 1 3.5 2zm-5 1a.5.5 0 0 0-.5.5V13h4V6.5A1.5 1.5 0 0 1 8.5 5H9V3.5a.5.5 0 0 0-.5-.5zm5 3a.5.5 0 0 0-.5.5V13h1v-1.5l.01-.1a.5.5 0 0 1 .49-.4h2l.1.01a.5.5 0 0 1 .4.49V13h1V6.5a.5.5 0 0 0-.5-.5zm1.5 7h1v-1h-1z");
}
</style><path class="h88nld02a"/>`,
		"fallback": "fluent:building-multiple-16-regular",
	});
}

export default Component;
