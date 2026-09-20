import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.de76cbb1e {
  fill: currentColor;
  d: path("M16 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14M9.293 17.293a1 1 0 1 0 1.414 1.414L16 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-5.878-5.879l-.033-.028l-.08-.073A1 1 0 0 0 16 11.02c-.26-.003-.484.097-.718.293c-.05.041-.06.05-.11.1v.002z");
}
</style><path class="de76cbb1e"/>`,
		"fallback": "fluent:chevron-circle-up-32-filled",
	});
}

export default Component;
