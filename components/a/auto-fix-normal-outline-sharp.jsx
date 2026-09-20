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
		"content": `<style>.iefh_fbib {
  fill: currentColor;
  d: path("m20 7l-.95-2.05L17 4l2.05-.95L20 1l.95 2.05L23 4l-2.05.95L20 7ZM5.825 22.425l-4.25-4.25l12.6-12.6l4.25 4.25l-12.6 12.6ZM5.8 19.6l7.2-7.2l-1.4-1.4l-7.2 7.2l1.4 1.4Z");
}
</style><path class="iefh_fbib"/>`,
		"fallback": "material-symbols:auto-fix-normal-outline-sharp",
	});
}

export default Component;
