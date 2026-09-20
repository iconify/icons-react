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
		"content": `<style>.mvaf7qbbt {
  fill: currentColor;
  d: path("M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1m-.098 2.646a.5.5 0 0 1 0 .708L4.756 5.5H8.5a.5.5 0 0 1 0 1H4.756l1.146 1.146a.5.5 0 1 1-.707.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .707 0");
}
</style><path class="mvaf7qbbt"/>`,
		"fallback": "fluent:arrow-circle-left-12-filled",
	});
}

export default Component;
