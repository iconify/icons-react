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
		"content": `<style>.yw96ddc1p {
  fill: currentColor;
  d: path("M240 204h-12v-60a12 12 0 0 0 12.49-19.78l-98.35-98.37a20 20 0 0 0-28.28 0L15.51 124.2A12 12 0 0 0 28 144v60H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M52 121.65l76-76l76 76V204h-40v-52a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v52H52ZM140 204h-24v-40h24Z");
}
</style><path class="yw96ddc1p"/>`,
		"fallback": "ph:house-line-bold",
	});
}

export default Component;
