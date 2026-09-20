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
		"content": `<style>.d63ce7bne {
  fill: currentColor;
  d: path("M208 100a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v4h-56v-4a20 20 0 0 0-20-20H48a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h4v56h-4a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-4h56v4a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-4v-56Zm-28-48h24v24h-24ZM52 52h24v24H52Zm24 152H52v-24h24Zm128 0h-24v-24h24Zm-24-48h-4a20 20 0 0 0-20 20v4h-56v-4a20 20 0 0 0-20-20h-4v-56h4a20 20 0 0 0 20-20v-4h56v4a20 20 0 0 0 20 20h4Z");
}
</style><path class="d63ce7bne"/>`,
		"fallback": "ph:bounding-box-bold",
	});
}

export default Component;
