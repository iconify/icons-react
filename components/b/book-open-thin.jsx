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
		"content": `<style>.yu1wyobzf {
  fill: currentColor;
  d: path("M232 52h-72a36 36 0 0 0-32 19.54A36 36 0 0 0 96 52H24a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h72a28 28 0 0 1 28 28a4 4 0 0 0 8 0a28 28 0 0 1 28-28h72a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4M96 196H28V60h68a28 28 0 0 1 28 28v121.4A35.93 35.93 0 0 0 96 196m132 0h-68a35.94 35.94 0 0 0-28 13.41V88a28 28 0 0 1 28-28h68Z");
}
</style><path class="yu1wyobzf"/>`,
		"fallback": "ph:book-open-thin",
	});
}

export default Component;
