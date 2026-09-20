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
		"content": `<style>.bc1sjubsm {
  fill: currentColor;
  d: path("m20 7l-.95-2.05L17 4l2.05-.95L20 1l.95 2.05L23 4l-2.05.95L20 7ZM5.825 22.425l-4.25-4.25l12.6-12.6l4.25 4.25l-12.6 12.6Zm8.35-11.2l1.4-1.4l-1.4-1.4l-1.4 1.4l1.4 1.4Z");
}
</style><path class="bc1sjubsm"/>`,
		"fallback": "material-symbols:auto-fix-normal-sharp",
	});
}

export default Component;
