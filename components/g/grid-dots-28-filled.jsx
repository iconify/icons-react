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
		"content": `<style>.t7bmuwbge {
  fill: currentColor;
  d: path("M14 20a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m8.5 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-17 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m8.5-8.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m8.5 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-17 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M14 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m8.5 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-17 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5");
}
</style><path class="t7bmuwbge"/>`,
		"fallback": "fluent:grid-dots-28-filled",
	});
}

export default Component;
