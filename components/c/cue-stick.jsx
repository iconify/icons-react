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
		"content": `<style>.jq1uh-j_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.195 13.331l2.474 2.474l-6.364 6.364l-2.474-2.474ZM9.5 14.5l11-11M5 16.5L7.5 19");
}
</style><path class="jq1uh-j_k"/>`,
		"fallback": "uix-sharp:cue-stick",
	});
}

export default Component;
