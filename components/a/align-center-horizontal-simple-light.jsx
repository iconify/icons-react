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
		"content": `<style>.ccaiueber {
  fill: currentColor;
  d: path("M208 82h-74V48a6 6 0 0 0-12 0v34H48a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h74v34a6 6 0 0 0 12 0v-34h74a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14m2 78a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z");
}
</style><path class="ccaiueber"/>`,
		"fallback": "ph:align-center-horizontal-simple-light",
	});
}

export default Component;
