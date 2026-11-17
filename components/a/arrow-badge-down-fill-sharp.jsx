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
		"content": `<style>.k-t8b7blo {
  fill: currentColor;
  d: path("m19.707 13.707l-7 7a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 4 13V4a1.002 1.002 0 0 1 1.707-.707L12 9.586l6.293-6.293A1 1 0 0 1 20 4v9c0 .265-.105.52-.293.707");
}
</style><path class="k-t8b7blo"/>`,
		"fallback": "coolicons:arrow-badge-down-fill-sharp",
	});
}

export default Component;
