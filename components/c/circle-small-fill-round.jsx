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
		"content": `<style>.qoko45bfl {
  fill: currentColor;
  d: path("M7.393 10.053a5.001 5.001 0 1 1 9.213 3.896a5.001 5.001 0 0 1-9.213-3.896");
}
</style><path class="qoko45bfl"/>`,
		"fallback": "coolicons:circle-small-fill-round",
	});
}

export default Component;
