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
		"content": `<style>.g_bjgpbqm {
  fill: currentColor;
  d: path("M6 11A5 5 0 1 1 6 1a5 5 0 0 1 0 10M4.146 6.146a.5.5 0 1 0 .708.708L6 5.707l1.146 1.147a.5.5 0 1 0 .708-.708l-1.5-1.5a.5.5 0 0 0-.708 0z");
}
</style><path class="g_bjgpbqm"/>`,
		"fallback": "fluent:chevron-circle-up-12-filled",
	});
}

export default Component;
