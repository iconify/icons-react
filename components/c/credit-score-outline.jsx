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
		"content": `<style>.e3-8wacgb {
  fill: currentColor;
  d: path("M4 8.808h16V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616zM3 6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v4.576H4v6.193q0 .23.192.423t.423.192h4.658v1H4.615q-.69 0-1.153-.462T3 17.384zm11.642 13.923l-3.557-3.558l.707-.708l2.85 2.839l5.689-5.689l.708.72zM4 6.615v10.769q0 .23.192.423t.423.192H4v-4.558v2.845V6h.616q-.231 0-.424.192T4 6.616");
}
</style><path class="e3-8wacgb"/>`,
		"fallback": "material-symbols-light:credit-score-outline",
	});
}

export default Component;
