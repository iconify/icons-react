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
		"content": `<style>.nukbs6b3x {
  fill: currentColor;
  d: path("M23.707 18.707a1 1 0 0 1-1.414 0L14 10.414l-8.293 8.293a1 1 0 0 1-1.414-1.414l9-9a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1 0 1.414");
}
</style><path class="nukbs6b3x"/>`,
		"fallback": "fluent:chevron-up-28-filled",
	});
}

export default Component;
