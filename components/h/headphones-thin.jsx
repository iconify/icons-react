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
		"content": `<style>.e0zd2nbvy {
  fill: currentColor;
  d: path("M199.05 57.48A100.07 100.07 0 0 0 28 128v56a20 20 0 0 0 20 20h16a20 20 0 0 0 20-20v-40a20 20 0 0 0-20-20H36.08A92 92 0 0 1 128 36h.7a91.75 91.75 0 0 1 91.22 88H192a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h16a20 20 0 0 0 20-20v-56a99.43 99.43 0 0 0-28.95-70.52M64 132a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12v-52Zm156 52a12 12 0 0 1-12 12h-16a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h28Z");
}
</style><path class="e0zd2nbvy"/>`,
		"fallback": "ph:headphones-thin",
	});
}

export default Component;
