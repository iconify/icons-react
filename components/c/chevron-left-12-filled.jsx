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
		"content": `<style>.pnlyjpb5e {
  fill: currentColor;
  d: path("M7.53 2.22a.75.75 0 0 1 0 1.06L4.81 6l2.72 2.72a.75.75 0 0 1-1.06 1.06L3.22 6.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0");
}
</style><path class="pnlyjpb5e"/>`,
		"fallback": "fluent:chevron-left-12-filled",
	});
}

export default Component;
