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
		"content": `<style>.njkffhs4s {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.5 12H9v-4.5H7.5V9h3zm7 0h-1.75L14 12.75V15h-1.5V9H14v2.25L15.75 9h1.75l-2.25 3z");
}
</style><path class="njkffhs4s"/>`,
		"fallback": "ic:baseline-1k",
	});
}

export default Component;
