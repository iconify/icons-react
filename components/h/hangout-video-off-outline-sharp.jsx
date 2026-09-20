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
		"content": `<style>.ojpot1bme {
  fill: currentColor;
  d: path("M11.016 8.627h2.676v2.677zm2.676 2.677l3.385-2.688v6.073zM20 17.612l1 1.038V5H7.389l1 1H20zM4.539 5l1 1H4v12h12.112l-2.616-2.615H6.923V8.812L1.969 3.846l.708-.708l18.377 18.378l-.708.707L17.112 19H3V5zm5.715 7.142");
}
</style><path class="ojpot1bme"/>`,
		"fallback": "material-symbols-light:hangout-video-off-outline-sharp",
	});
}

export default Component;
