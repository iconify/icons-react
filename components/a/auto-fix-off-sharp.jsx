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
		"content": `<style>.k4nor2bon {
  fill: currentColor;
  d: path("m20 7l-.95-2.05L17 4l2.05-.95L20 1l.95 2.05L23 4l-2.05.95L20 7Zm-4.45 5.7L11.3 8.45l2.875-2.875l4.25 4.25L15.55 12.7Zm4.25 9.9l-7.1-7.05l-6.875 6.875L1.6 18.15l6.85-6.85L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4Z");
}
</style><path class="k4nor2bon"/>`,
		"fallback": "material-symbols:auto-fix-off-sharp",
	});
}

export default Component;
