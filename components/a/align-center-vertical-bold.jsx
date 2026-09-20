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
		"content": `<style>.mh5n0lwux {
  fill: currentColor;
  d: path("M224 116h-8V72a20 20 0 0 0-20-20h-40a20 20 0 0 0-20 20v44h-16V48a20 20 0 0 0-20-20H60a20 20 0 0 0-20 20v68h-8a12 12 0 0 0 0 24h8v68a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20v-68h16v44a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20v-44h8a12 12 0 0 0 0-24M96 204H64V52h32Zm96-24h-32V76h32Z");
}
</style><path class="mh5n0lwux"/>`,
		"fallback": "ph:align-center-vertical-bold",
	});
}

export default Component;
