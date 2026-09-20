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
		"content": `<style>.jlnq3mb2k {
  fill: currentColor;
  d: path("m20 7l-.95-2.05L17 4l2.05-.95L20 1l.95 2.05L23 4l-2.05.95L20 7Zm-4.45 5.7L11.3 8.45l2.15-2.15q.3-.3.725-.3t.725.3l2.8 2.8q.3.3.3.725t-.3.725l-2.15 2.15Zm4.25 9.9l-7.1-7.05l-6.15 6.15q-.3.3-.725.3t-.725-.3l-2.8-2.85q-.275-.275-.275-.7t.275-.7l6.15-6.15L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4Z");
}
</style><path class="jlnq3mb2k"/>`,
		"fallback": "material-symbols:auto-fix-off",
	});
}

export default Component;
