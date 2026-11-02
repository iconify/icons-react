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
		"content": `<style>.hv75r1n-j {
  fill: currentColor;
  d: path("M8 5V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h1V4H10v1a1 1 0 0 1-2 0M2 9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}
</style><path class="hv75r1n-j"/>`,
		"fallback": "coolicons:copy-alt-2-fill-sharp",
	});
}

export default Component;
