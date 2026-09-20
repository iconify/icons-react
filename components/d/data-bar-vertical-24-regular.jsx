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
		"content": `<style>.jb8nw7bue {
  fill: currentColor;
  d: path("M5.75 3a2.25 2.25 0 0 1 2.248 2.25v13.5a2.25 2.25 0 1 1-4.498 0V5.25A2.25 2.25 0 0 1 5.75 3m6.5 4a2.25 2.25 0 0 1 2.248 2.25v9.5a2.25 2.25 0 1 1-4.498 0v-9.5A2.25 2.25 0 0 1 12.25 7m6.5 4a2.25 2.25 0 0 1 2.248 2.25v5.5a2.25 2.25 0 1 1-4.498 0v-5.5A2.25 2.25 0 0 1 18.75 11m-13-6.5a.75.75 0 0 0-.75.75v13.5a.75.75 0 0 0 1.498 0V5.25a.75.75 0 0 0-.749-.75m6.5 4a.75.75 0 0 0-.75.75v9.5a.75.75 0 0 0 1.498 0v-9.5a.75.75 0 0 0-.749-.75m6.5 4a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.498 0v-5.5a.75.75 0 0 0-.749-.75");
}
</style><path class="jb8nw7bue"/>`,
		"fallback": "fluent:data-bar-vertical-24-regular",
	});
}

export default Component;
