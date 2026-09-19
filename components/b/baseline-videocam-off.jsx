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
		"content": `<style>.x7zjmnb9q {
  fill: currentColor;
  d: path("m21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18zM3.27 2L2 3.27L4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21L21 19.73z");
}
</style><path class="x7zjmnb9q"/>`,
		"fallback": "ic:baseline-videocam-off",
	});
}

export default Component;
