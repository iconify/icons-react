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
		"content": `<style>.bez2xvgmi {
  fill: currentColor;
  d: path("M216 52h-36V40a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v12H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V72a20 20 0 0 0-20-20M44 120h168v32H44Zm56-80a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v12h-56Zm112 36v20H44V76ZM44 196v-20h168v20Z");
}
</style><path class="bez2xvgmi"/>`,
		"fallback": "ph:briefcase-metal-bold",
	});
}

export default Component;
