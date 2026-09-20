import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kl1avqrkm {
  fill: currentColor;
  d: path("M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14m8-19v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.584a5 5 0 0 0-8.311-1.333a1 1 0 1 1-1.49-1.334A7 7 0 0 1 16 9a7 7 0 0 1 6 3.392V11a1 1 0 1 1 2 0M9 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1.584a5 5 0 0 0 8.311 1.333a1 1 0 1 1 1.49 1.334A7 7 0 0 1 16 23a7 7 0 0 1-6-3.392V21a1 1 0 0 1-1 1");
}
</style><path class="kl1avqrkm"/>`,
		"fallback": "fluent:arrow-sync-circle-32-filled",
	});
}

export default Component;
