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
		"content": `<style>.yvoi15yhc {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m6.293 1.707l3 3a1 1 0 0 0 1.414 0l3-3a.999.999 0 1 0-1.414-1.414L13 13.586V8a1 1 0 0 0-2 0v5.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414");
}
</style><path class="yvoi15yhc"/>`,
		"fallback": "coolicons:circle-arrow-down-fill",
	});
}

export default Component;
