import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.knu_rybks {
  fill: currentColor;
  d: path("M3.5 1A1.5 1.5 0 0 0 2 2.5v7A1.5 1.5 0 0 0 3.5 11h5A1.5 1.5 0 0 0 10 9.5v-7A1.5 1.5 0 0 0 8.5 1zm2 1h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1M7 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M4 7.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5C8 8.5 7 9 6 9s-2-.5-2-1.5");
}
</style><path class="knu_rybks"/>`,
		"fallback": "fluent:guest-12-filled",
	});
}

export default Component;
