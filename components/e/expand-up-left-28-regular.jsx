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
		"content": `<style>.o6mev5b0t {
  fill: currentColor;
  d: path("M23.5 6.75a2.25 2.25 0 0 0-2.25-2.25h-5a.75.75 0 0 1 0-1.5h5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25v-5a.75.75 0 0 1 1.5 0v5a2.25 2.25 0 0 0 2.25 2.25H14v-6.75A2.75 2.75 0 0 1 16.75 14h6.75zm0 8.75h-6.75c-.69 0-1.25.56-1.25 1.25v6.75h5.75a2.25 2.25 0 0 0 2.25-2.25zm-11-11.75a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0V5.56l6.22 6.22a.75.75 0 1 0 1.06-1.06L5.56 4.5h6.19a.75.75 0 0 0 .75-.75");
}
</style><path class="o6mev5b0t"/>`,
		"fallback": "fluent:expand-up-left-28-regular",
	});
}

export default Component;
