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
		"content": `<style>.ckmwpcbte {
  fill: currentColor;
  d: path("M180 80a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4M40 84h108v20a4 4 0 0 0 8 0V56a4 4 0 0 0-8 0v20H40a4 4 0 0 0 0 8m176 88h-96a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8M88 148a4 4 0 0 0-4 4v20H40a4 4 0 0 0 0 8h44v20a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4");
}
</style><path class="ckmwpcbte"/>`,
		"fallback": "ph:faders-horizontal-thin",
	});
}

export default Component;
