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
		"content": `<style>.x407fvbfo {
  fill: currentColor;
  d: path("M14 2H6.01a2 2 0 0 0-2 2L4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm-1 7V3.5L18.5 9zm1 5l2-1.06v4.12L14 16v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1z");
}
</style><path class="x407fvbfo"/>`,
		"fallback": "ic:baseline-video-file",
	});
}

export default Component;
