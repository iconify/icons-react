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
		"content": `<style>.a0x2p9z6e {
  fill: currentColor;
  d: path("M3.354 4.354a.5.5 0 1 1-.708-.708l2.5-2.5a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 1 1-.708.708L6 2.707v6.586l1.646-1.647a.5.5 0 1 1 .708.708l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L5 9.293V2.707z");
}
</style><path class="a0x2p9z6e"/>`,
		"fallback": "fluent:arrow-bidirectional-up-down-12-regular",
	});
}

export default Component;
