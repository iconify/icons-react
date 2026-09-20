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
		"content": `<style>.svbk-vbqt {
  fill: currentColor;
  d: path("M3.25 2C4.216 2 5 2.784 5 3.75v8.5A1.75 1.75 0 0 1 3.25 14H2.5a.5.5 0 0 1 0-1h.75a.75.75 0 0 0 .75-.75v-8.5A.75.75 0 0 0 3.25 3H2.5a.5.5 0 0 1 0-1zM8.5 2A1.5 1.5 0 0 1 10 3.5v9A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-9A1.5 1.5 0 0 1 7.5 2zm5 0a.5.5 0 0 1 0 1h-.75a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h.75a.5.5 0 0 1 0 1h-.75A1.75 1.75 0 0 1 11 12.25v-8.5c0-.966.784-1.75 1.75-1.75zm-6 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z");
}
</style><path class="svbk-vbqt"/>`,
		"fallback": "fluent:column-16-regular",
	});
}

export default Component;
