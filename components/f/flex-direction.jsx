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
		"content": `<style>.my3cq462x {
  fill: currentColor;
  d: path("M2 20v-7h9v7zm0-9V4h9v7zm2-2h5V6H4zm14 11l-5-5l1.4-1.4l2.6 2.575V4h2v12.175l2.6-2.575L23 15z");
}
</style><path class="my3cq462x"/>`,
		"fallback": "material-symbols:flex-direction",
	});
}

export default Component;
