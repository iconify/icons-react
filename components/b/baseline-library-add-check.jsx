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
		"content": `<style>.az65jfbpn {
  fill: currentColor;
  d: path("M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7.53 12L9 10.5l1.4-1.41l2.07 2.08L17.6 6L19 7.41zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4z");
}
</style><path class="az65jfbpn"/>`,
		"fallback": "ic:baseline-library-add-check",
	});
}

export default Component;
