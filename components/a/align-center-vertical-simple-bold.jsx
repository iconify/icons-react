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
		"content": `<style>.vv9jvuosi {
  fill: currentColor;
  d: path("M208 116h-28V48a20 20 0 0 0-20-20H96a20 20 0 0 0-20 20v68H48a12 12 0 0 0 0 24h28v68a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20v-68h28a12 12 0 0 0 0-24m-52 88h-56V52h56Z");
}
</style><path class="vv9jvuosi"/>`,
		"fallback": "ph:align-center-vertical-simple-bold",
	});
}

export default Component;
