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
		"content": `<style>.chbqkt9pd {
  fill: currentColor;
  d: path("M136 182a78 78 0 1 0-78-78a78.09 78.09 0 0 0 78 78m0-144a66 66 0 1 1-66 66a66.08 66.08 0 0 1 66-66m76.33 136.89a6 6 0 0 1-.17 8.48A109.2 109.2 0 0 1 142 213.83V234h26a6 6 0 0 1 0 12h-64a6 6 0 0 1 0-12h26v-20.17a110 110 0 0 1-73.38-186a6 6 0 0 1 8.66 8.32a98 98 0 0 0 138.56 138.57a6 6 0 0 1 8.49.17");
}
</style><path class="chbqkt9pd"/>`,
		"fallback": "ph:globe-stand-light",
	});
}

export default Component;
