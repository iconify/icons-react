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
		"content": `<style>.x9fffob2b {
  fill: currentColor;
  d: path("M19 10.998h-6v6h-2v-6H5v-2h6v-6h2v6h6zm0 10H5v-2h14z");
}
</style><path class="x9fffob2b"/>`,
		"fallback": "ic:baseline-plus-minus",
	});
}

export default Component;
