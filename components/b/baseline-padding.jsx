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
		"content": `<style>.mmaeey4yo {
  fill: currentColor;
  d: path("M3 3v18h18V3zm16 16H5V5h14zM11 7h2v2h-2zM7 7h2v2H7zm8 0h2v2h-2z");
}
</style><path class="mmaeey4yo"/>`,
		"fallback": "ic:baseline-padding",
	});
}

export default Component;
