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
		"content": `<style>.h3sod8rzv {
  fill: currentColor;
  d: path("M196 40v64a12 12 0 0 1-3.51 8.49L140 165v38l11.51-11.52a12 12 0 0 1 17 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L116 203v-38l-52.49-52.51A12 12 0 0 1 60 104V40a12 12 0 0 1 24 0v59l44 44l44-44V40a12 12 0 0 1 24 0");
}
</style><path class="h3sod8rzv"/>`,
		"fallback": "ph:arrows-merge-bold",
	});
}

export default Component;
