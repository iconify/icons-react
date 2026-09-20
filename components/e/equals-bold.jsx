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
		"content": `<style>.iiu4r_vok {
  fill: currentColor;
  d: path("M228 160a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M40 108h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24");
}
</style><path class="iiu4r_vok"/>`,
		"fallback": "ph:equals-bold",
	});
}

export default Component;
