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
		"content": `<style>.xqu14vb7r {
  fill: currentColor;
  d: path("M2.616 14.5v-1H5v1zm4.08-5.096L5.014 7.702l.688-.689l1.683 1.702zM7.5 17v-2h9v2zm4-10V4.616h1V7zm5.766 2.39l-.689-.713l1.702-1.664l.688.714zM19 14.5v-1h2.385v1z");
}
</style><path class="xqu14vb7r"/>`,
		"fallback": "material-symbols-light:backlight-low-sharp",
	});
}

export default Component;
