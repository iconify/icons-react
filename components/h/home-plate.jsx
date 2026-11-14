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
		"content": `<style>.d8k2d7-4k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.25 2.75H5.75q-1.036 0-1.768.732T3.25 5.25v6.525q0 1.036.733 1.768l6.25 6.251q1.767 1.765 3.534-.001l6.25-6.249q.733-.733.733-1.769V5.25q0-1.036-.732-1.768T18.25 2.75M9 6.25h6q2.25 0 2.25 2.25v2.379q0 .931-.658 1.59l-3.001 3q-.659.66-1.591.66t-1.591-.66l-3-3q-.659-.659-.659-1.59V8.5q0-2.25 2.25-2.25");
}
</style><path class="d8k2d7-4k"/>`,
		"fallback": "uix-solid:home-plate",
	});
}

export default Component;
