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
		"content": `<style>.gfe_b861b {
  fill: currentColor;
  d: path("M200 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H60V44h136ZM76 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m0 96a16 16 0 1 1 16 16a16 16 0 0 1-16-16m0-48a16 16 0 1 1 16 16a16 16 0 0 1-16-16");
}
</style><path class="gfe_b861b"/>`,
		"fallback": "ph:film-script-bold",
	});
}

export default Component;
