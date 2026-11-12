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
		"content": `<style>.mtxlhwbyf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h18v8H3Zm0 12h18v6H3Zm4-9v2m7-2l2 2l2-2M7 18h10");
}
</style><path class="mtxlhwbyf"/>`,
		"fallback": "coolicons:combobox-sharp",
	});
}

export default Component;
