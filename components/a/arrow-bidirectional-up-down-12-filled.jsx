import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.majoqybcv {
  fill: currentColor;
  d: path("M3.78 4.53a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06L6.5 3.31v5.38l1.22-1.22a.75.75 0 0 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06L5 8.69V3.31z");
}
</style><path class="majoqybcv"/>`,
		"fallback": "fluent:arrow-bidirectional-up-down-12-filled",
	});
}

export default Component;
