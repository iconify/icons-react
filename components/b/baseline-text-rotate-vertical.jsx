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
		"content": `<style>.wy-p6xb-e {
  fill: currentColor;
  d: path("M15.75 5h-1.5L9.5 16h2.1l.9-2.2h5l.9 2.2h2.1zm-2.62 7L15 6.98L16.87 12zM6 19.75l3-3H7V4.25H5v12.5H3z");
}
</style><path class="wy-p6xb-e"/>`,
		"fallback": "ic:baseline-text-rotate-vertical",
	});
}

export default Component;
