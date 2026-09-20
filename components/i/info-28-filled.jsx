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
		"content": `<style>.enyt2zk8d {
  fill: currentColor;
  d: path("M2 14c0 6.627 5.373 12 12 12s12-5.373 12-12S20.627 2 14 2S2 7.373 2 14m12-2.5a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75m0-1.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="enyt2zk8d"/>`,
		"fallback": "fluent:info-28-filled",
	});
}

export default Component;
