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
		"content": `<style>.q7zlcxb2r {
  fill: currentColor;
  d: path("M14 12c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2m-2-9a9 9 0 0 0-9 9H0l4 4l4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7a6.995 6.995 0 0 1-11.06 5.7l-1.42 1.44A9 9 0 1 0 12 3");
}
</style><path class="q7zlcxb2r"/>`,
		"fallback": "ic:baseline-settings-backup-restore",
	});
}

export default Component;
