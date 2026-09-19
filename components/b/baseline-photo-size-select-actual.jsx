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
		"content": `<style>.njag92bve {
  fill: currentColor;
  d: path("M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2M5 17l3.5-4.5l2.5 3.01L14.5 11l4.5 6z");
}
</style><path class="njag92bve"/>`,
		"fallback": "ic:baseline-photo-size-select-actual",
	});
}

export default Component;
