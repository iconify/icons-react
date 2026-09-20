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
		"content": `<style>.qkbbk9b7h {
  fill: currentColor;
  d: path("M208 128h-28v-20h12a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20H64a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h12v20H48a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h8v32a12 12 0 0 0 24 0v-32h96v32a12 12 0 0 0 24 0v-32h8a20 20 0 0 0 20-20v-24a20 20 0 0 0-20-20M68 44h120v40H68Zm32 64h56v20h-56Zm104 60H52v-16h152Z");
}
</style><path class="qkbbk9b7h"/>`,
		"fallback": "ph:chair-bold",
	});
}

export default Component;
