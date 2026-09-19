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
		"content": `<style>.gvp8s8blr {
  fill: currentColor;
  d: path("M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7m0 2a2 2 0 1 1 .001 4.001A2 2 0 0 1 12 4m0 10c-1.67 0-3.14-.85-4-2.15c.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05A4.78 4.78 0 0 1 12 14");
}
</style><path class="gvp8s8blr"/>`,
		"fallback": "ic:baseline-person-pin-circle",
	});
}

export default Component;
