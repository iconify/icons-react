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
		"content": `<style>.n_nuu7brb {
  fill: currentColor;
  d: path("M224 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-4 112H36V84h184Zm-56-44a16 16 0 1 1 16 16a16 16 0 0 1-16-16");
}
</style><path class="n_nuu7brb"/>`,
		"fallback": "ph:hard-drive-bold",
	});
}

export default Component;
