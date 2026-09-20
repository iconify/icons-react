import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pfl-bedjp {
  fill: currentColor;
  d: path("m255.43 117l-14-35a15.93 15.93 0 0 0-14.85-10H192v-8a8 8 0 0 0-16 0v64H24a8 8 0 0 0-8 8v48a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a7.9 7.9 0 0 0-.57-3M80 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m112 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-96V88h34.58l9.6 24ZM24 96a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16h-16V72h16a8 8 0 0 0 0-16H24a8 8 0 0 0 0 16h16v24Zm72-24h24v24H96Zm-40 0h24v24H56Z");
}
</style><path class="pfl-bedjp"/>`,
		"fallback": "ph:fire-truck-fill",
	});
}

export default Component;
