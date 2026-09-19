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
		"content": `<style>.zamwb1b7d {
  fill: currentColor;
  d: path("M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z");
}
</style><path class="zamwb1b7d"/>`,
		"fallback": "ic:baseline-warning",
	});
}

export default Component;
