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
		"content": `<style>.ejgufpbfw {
  fill: currentColor;
  d: path("M132 136v64a12 12 0 0 1-24 0v-35l-59.51 59.49a12 12 0 0 1-17-17L91 148H56a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m76-108H80a20 20 0 0 0-20 20v44a12 12 0 0 0 24 0V52h120v120h-40a12 12 0 0 0 0 24h44a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20");
}
</style><path class="ejgufpbfw"/>`,
		"fallback": "ph:arrow-square-in-bold",
	});
}

export default Component;
