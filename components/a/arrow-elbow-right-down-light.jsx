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
		"content": `<style>.r4guirycq {
  fill: currentColor;
  d: path("m228.24 164.24l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 1 1 8.48-8.48L170 193.51V70H32a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6v129.51l37.76-37.75a6 6 0 0 1 8.48 8.48");
}
</style><path class="r4guirycq"/>`,
		"fallback": "ph:arrow-elbow-right-down-light",
	});
}

export default Component;
