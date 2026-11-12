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
		"content": `<style>.he5k6-leq {
  fill: currentColor;
  d: path("m14.65 3.816l-.185-.983l3.368-.632a2 2 0 0 1 2.334 1.598l.194 1.034a2 2 0 0 1-1.597 2.334l-3.367.632Zm-5.334 1l-.185-.983l3.368-.632l.9 4.799H17a5 5 0 0 1 5 5v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5v-4c0-1.135.381-2.232 1.091-3.118a1 1 0 0 1-.511-.698l-.379-2.017a2 2 0 0 1 1.598-2.334l3.367-.632L7.879 8h2.034ZM9 12.5v5a1.284 1.284 0 0 0 1.943 1.1l4.143-2.485a1.3 1.3 0 0 0 0-2.23L10.943 11.4A1.284 1.284 0 0 0 9 12.5");
}
</style><path class="he5k6-leq"/>`,
		"fallback": "coolicons:clapperboard-fill-round",
	});
}

export default Component;
