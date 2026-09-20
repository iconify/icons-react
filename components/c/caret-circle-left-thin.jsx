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
		"content": `<style>.pczz-i7qc {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m18.83-129.17L109.66 128l37.17 37.17a4 4 0 0 1-5.66 5.66l-40-40a4 4 0 0 1 0-5.66l40-40a4 4 0 1 1 5.66 5.66");
}
</style><path class="pczz-i7qc"/>`,
		"fallback": "ph:caret-circle-left-thin",
	});
}

export default Component;
