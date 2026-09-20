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
		"content": `<style>.dr87vet0p {
  fill: currentColor;
  d: path("M3 19v-6h18v6zm0-8V9h18v2zm0-4V5h18v2z");
}
</style><path class="dr87vet0p"/>`,
		"fallback": "material-symbols:horizontal-split-outline",
	});
}

export default Component;
