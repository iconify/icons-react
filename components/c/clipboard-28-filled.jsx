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
		"content": `<style>.imy0w_bfy {
  fill: currentColor;
  d: path("M18.45 4h1.8A2.75 2.75 0 0 1 23 6.75v16.5A2.75 2.75 0 0 1 20.25 26H7.75A2.75 2.75 0 0 1 5 23.25V6.75A2.75 2.75 0 0 1 7.75 4h1.8A2.5 2.5 0 0 1 12 2h4a2.5 2.5 0 0 1 2.45 2M11 4.5a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-4a1 1 0 0 0-1 1");
}
</style><path class="imy0w_bfy"/>`,
		"fallback": "fluent:clipboard-28-filled",
	});
}

export default Component;
