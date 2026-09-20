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
		"content": `<style>.c9gt39bmh {
  fill: currentColor;
  d: path("M3.5 12a8.5 8.5 0 0 1 17 0v2h-2.25a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75H19a3 3 0 0 0 3-3v-7c0-5.523-4.477-10-10-10S2 6.477 2 12v7a3 3 0 0 0 3 3h.75a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75H3.5zm17 3.5V19a1.5 1.5 0 0 1-1.5 1.5v-5zM3.5 19v-3.5H5v5A1.5 1.5 0 0 1 3.5 19m9.25-7.25a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zm-4 2.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75m7.25.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="c9gt39bmh"/>`,
		"fallback": "fluent:headphones-sound-wave-24-regular",
	});
}

export default Component;
