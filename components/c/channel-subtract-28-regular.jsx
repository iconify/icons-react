import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s3984wb3b {
  fill: currentColor;
  d: path("M3 11.397v9.353A4.25 4.25 0 0 0 7.25 25h7.25a7.5 7.5 0 0 1-.876-1.5H7.25a2.75 2.75 0 0 1-2.75-2.75v-9.353a2.75 2.75 0 0 1-1.5 0M25 7.25v7.25a7.5 7.5 0 0 0-1.5-.876V7.25a2.75 2.75 0 0 0-2.75-2.75H7.25a2.75 2.75 0 0 0-2.532 1.675a2.74 2.74 0 0 0-1.55-.113A4.25 4.25 0 0 1 7.25 3h13.5A4.25 4.25 0 0 1 25 7.25M9.75 15h5.65a7.5 7.5 0 0 0-1.245 1.5H9.75a.75.75 0 0 1 0-1.5M2 8.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 0 0-3.5 0M9.75 11a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-2 0a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 .5-.5");
}
</style><path class="s3984wb3b"/>`,
		"fallback": "fluent:channel-subtract-28-regular",
	});
}

export default Component;
