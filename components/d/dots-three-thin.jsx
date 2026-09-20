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
		"content": `<style>.bwdbz5bas {
  fill: currentColor;
  d: path("M136 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-76-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m136 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8");
}
</style><path class="bwdbz5bas"/>`,
		"fallback": "ph:dots-three-thin",
	});
}

export default Component;
