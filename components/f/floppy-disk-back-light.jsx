import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iu0s--x3g {
  fill: currentColor;
  d: path("M208 34H83.31a13.94 13.94 0 0 0-9.9 4.1L38.1 73.41a13.94 13.94 0 0 0-4.1 9.9V208a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M86 46h84v34a2 2 0 0 1-2 2H88a2 2 0 0 1-2-2Zm124 162a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V83.31a2 2 0 0 1 .59-1.41L74 54.48V80a14 14 0 0 0 14 14h80a14 14 0 0 0 14-14V46h26a2 2 0 0 1 2 2Zm-82-94a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26");
}
</style><path class="iu0s--x3g"/>`,
		"fallback": "ph:floppy-disk-back-light",
	});
}

export default Component;
