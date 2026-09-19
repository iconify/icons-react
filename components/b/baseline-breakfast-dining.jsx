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
		"content": `<style>.y1g04wbyv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45c0-2.21-1.79-4-4-4m-4 12h-4v-4h4z");
}
</style><path class="y1g04wbyv"/>`,
		"fallback": "ic:baseline-breakfast-dining",
	});
}

export default Component;
