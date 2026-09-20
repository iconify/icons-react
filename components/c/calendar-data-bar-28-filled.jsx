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
		"content": `<style>.p97af6brg {
  fill: currentColor;
  d: path("M25 9.5v6.55a2.5 2.5 0 0 0-2 .45v-1a2.5 2.5 0 0 0-5 0v4a2.5 2.5 0 0 0-4 2V25H6.25A3.25 3.25 0 0 1 3 21.75V9.5zM21.75 3A3.25 3.25 0 0 1 25 6.25V8H3V6.25A3.25 3.25 0 0 1 6.25 3zM20.5 14a1.5 1.5 0 0 0-1.5 1.5v10a1.5 1.5 0 0 0 3 0v-10a1.5 1.5 0 0 0-1.5-1.5m-4 6a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 3 0v-4a1.5 1.5 0 0 0-1.5-1.5m6.5-1.5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 1-3 0z");
}
</style><path class="p97af6brg"/>`,
		"fallback": "fluent:calendar-data-bar-28-filled",
	});
}

export default Component;
