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
		"content": `<style>.rfy9l7b0f {
  fill: currentColor;
  d: path("M4 7h16v2H4zm0 6h16v-2H4zm0 4h7v-2H4zm0 4h7v-2H4zm11.41-2.83L14 16.75l-1.41 1.41L15.41 21L20 16.42L18.58 15zM4 3v2h16V3z");
}
</style><path class="rfy9l7b0f"/>`,
		"fallback": "ic:baseline-grading",
	});
}

export default Component;
