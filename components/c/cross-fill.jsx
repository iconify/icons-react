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
		"content": `<style>.kzqy8dbvb {
  fill: currentColor;
  d: path("M216 92v24a16 16 0 0 1-16 16h-44v92a16 16 0 0 1-16 16h-24a16 16 0 0 1-16-16v-92H56a16 16 0 0 1-16-16V92a16 16 0 0 1 16-16h44V32a16 16 0 0 1 16-16h24a16 16 0 0 1 16 16v44h44a16 16 0 0 1 16 16");
}
</style><path class="kzqy8dbvb"/>`,
		"fallback": "ph:cross-fill",
	});
}

export default Component;
