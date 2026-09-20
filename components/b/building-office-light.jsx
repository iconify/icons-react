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
		"content": `<style>.hiwa5rb1j {
  fill: currentColor;
  d: path("M248 210h-18V94h2a6 6 0 0 0 0-12h-50V46h2a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12h2v164H24a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M218 94v116h-36V94ZM54 46h116v164h-28v-50a6 6 0 0 0-6-6H88a6 6 0 0 0-6 6v50H54Zm76 164H94v-44h36ZM74 80a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H80a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-42 46a6 6 0 0 1 0-12h16a6 6 0 0 1 0 12Zm42-6a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6");
}
</style><path class="hiwa5rb1j"/>`,
		"fallback": "ph:building-office-light",
	});
}

export default Component;
