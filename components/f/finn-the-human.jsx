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
		"content": `<style>.mc7rom-lv {
  fill: currentColor;
  d: path("M168 104H88a40 40 0 0 0-40 40v8a40 40 0 0 0 40 40h80a40 40 0 0 0 40-40v-8a40 40 0 0 0-40-40m24 48a24 24 0 0 1-24 24H88a24 24 0 0 1-24-24v-8a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24Zm16-112a32.06 32.06 0 0 0-31 24H79a32 32 0 0 0-63 8v80a72.08 72.08 0 0 0 72 72h80a72.08 72.08 0 0 0 72-72V72a32 32 0 0 0-32-32m16 112a56.06 56.06 0 0 1-56 56H88a56.06 56.06 0 0 1-56-56V72a16 16 0 0 1 32 0a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8a16 16 0 0 1 32 0Zm-120-4a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="mc7rom-lv"/>`,
		"fallback": "ph:finn-the-human",
	});
}

export default Component;
