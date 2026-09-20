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
		"content": `<style>.m0xoln6ko {
  fill: currentColor;
  d: path("M4 8.808h16V6H4zM3 19V5h18v6.192H4V18h5.273v1zm11.642 1.539l-3.557-3.558l.707-.708l2.85 2.839l5.689-5.689l.708.72zM4 18v-4.558v2.845V6z");
}
</style><path class="m0xoln6ko"/>`,
		"fallback": "material-symbols-light:credit-score-outline-sharp",
	});
}

export default Component;
