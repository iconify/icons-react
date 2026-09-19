import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n4qgoeo6x {
  fill: currentColor;
  d: path("M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z");
}
</style><path class="n4qgoeo6x"/>`,
		"fallback": "ic:baseline-download",
	});
}

export default Component;
