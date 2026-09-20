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
		"content": `<style>.yrx1z8-yu {
  fill: currentColor;
  d: path("M132 20A104.11 104.11 0 0 0 28 124v84a20 20 0 0 0 20 20h84a104 104 0 0 0 0-208m0 184H52v-80a80 80 0 1 1 80 80m-8-76a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="yrx1z8-yu"/>`,
		"fallback": "ph:chat-teardrop-dots-bold",
	});
}

export default Component;
