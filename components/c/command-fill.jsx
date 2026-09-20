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
		"content": `<style>.e4-yj0lqd {
  fill: currentColor;
  d: path("M116 116h24v24h-24ZM86 72a14 14 0 0 0 0 28h14V86a14 14 0 0 0-14-14m98 14a14 14 0 0 0-28 0v14h14a14 14 0 0 0 14-14M72 170a14 14 0 0 0 28 0v-14H86a14 14 0 0 0-14 14M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-68 92v-24h14a30 30 0 1 0-30-30v14h-24V86a30 30 0 1 0-30 30h14v24H86a30 30 0 1 0 30 30v-14h24v14a30 30 0 1 0 30-30Zm0 30a14 14 0 1 0 14-14h-14Z");
}
</style><path class="e4-yj0lqd"/>`,
		"fallback": "ph:command-fill",
	});
}

export default Component;
