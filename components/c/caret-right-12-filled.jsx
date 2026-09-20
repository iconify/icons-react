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
		"content": `<style>.m93ast6nk {
  fill: currentColor;
  d: path("M5.702 3.282C5.069 2.659 4 3.107 4 3.994v4.012c0 .887 1.07 1.335 1.702.713l2.037-2.006a1 1 0 0 0 0-1.425z");
}
</style><path class="m93ast6nk"/>`,
		"fallback": "fluent:caret-right-12-filled",
	});
}

export default Component;
