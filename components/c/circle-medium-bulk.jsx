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
		"content": `<style>.t-5xk6bmx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 12a7 7 0 1 1 14 0a7 7 0 0 1-14 0");
}
</style><path class="t-5xk6bmx"/>`,
		"fallback": "coolicons:circle-medium-bulk",
	});
}

export default Component;
