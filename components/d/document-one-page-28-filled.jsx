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
		"content": `<style>.sdsa7hmhl {
  fill: currentColor;
  d: path("M21.25 2A2.75 2.75 0 0 1 24 4.75v18.5A2.75 2.75 0 0 1 21.25 26H6.75A2.75 2.75 0 0 1 4 23.25V4.75A2.75 2.75 0 0 1 6.75 2zM8.75 19a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0-6a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0-6a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="sdsa7hmhl"/>`,
		"fallback": "fluent:document-one-page-28-filled",
	});
}

export default Component;
