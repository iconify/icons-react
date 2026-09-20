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
		"content": `<style>.z_0c8sb5r {
  fill: currentColor;
  d: path("M224 44H32a20 20 0 0 0-20 20v24a20 20 0 0 0 16 19.6V192a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-84.4A20 20 0 0 0 244 88V64a20 20 0 0 0-20-20M36 68h184v16H36Zm16 120v-80h152v80Zm112-52a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12");
}
</style><path class="z_0c8sb5r"/>`,
		"fallback": "ph:archive-bold",
	});
}

export default Component;
