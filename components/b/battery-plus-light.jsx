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
		"content": `<style>.j0co69bno {
  fill: currentColor;
  d: path("M150 128a6 6 0 0 1-6 6h-22v22a6 6 0 0 1-12 0v-22H88a6 6 0 0 1 0-12h22v-22a6 6 0 0 1 12 0v22h22a6 6 0 0 1 6 6m72-48v96a22 22 0 0 1-22 22H32a22 22 0 0 1-22-22V80a22 22 0 0 1 22-22h168a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H32a10 10 0 0 0-10 10v96a10 10 0 0 0 10 10h168a10 10 0 0 0 10-10Zm38 10a6 6 0 0 0-6 6v64a6 6 0 0 0 12 0V96a6 6 0 0 0-6-6");
}
</style><path class="j0co69bno"/>`,
		"fallback": "ph:battery-plus-light",
	});
}

export default Component;
