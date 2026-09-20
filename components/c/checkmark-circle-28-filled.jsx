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
		"content": `<style>.dh6wu2g0w {
  fill: currentColor;
  d: path("M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2m5.53 8.22a.75.75 0 0 0-1.06 0l-5.97 5.97l-2.97-2.97a.75.75 0 1 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l6.5-6.5a.75.75 0 0 0 0-1.06");
}
</style><path class="dh6wu2g0w"/>`,
		"fallback": "fluent:checkmark-circle-28-filled",
	});
}

export default Component;
