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
		"content": `<style>.z88-qi4kf {
  fill: currentColor;
  d: path("M12 22.8L1.2 12L12 1.2L22.8 12zm0-2.8l8-8l-8-8l-8 8zm0-3l5-5l-5-5l-1.4 1.4l2.55 2.6H7v2h6.15l-2.55 2.6zm0-5");
}
</style><path class="z88-qi4kf"/>`,
		"fallback": "material-symbols:directions-alt-outline-sharp",
	});
}

export default Component;
