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
		"content": `<style>.zv2prrbej {
  fill: currentColor;
  d: path("M132 20A104.11 104.11 0 0 0 28 124v84a20 20 0 0 0 20 20h84a104 104 0 0 0 0-208m0 184H52v-80a80 80 0 1 1 80 80");
}
</style><path class="zv2prrbej"/>`,
		"fallback": "ph:chat-teardrop-bold",
	});
}

export default Component;
