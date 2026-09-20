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
		"content": `<style>.tr_651qfv {
  fill: currentColor;
  d: path("M14.827 19V6.25H9.904V5H21v1.25h-4.923V19zm-8.865 0v-7.846H3v-1.25h7.154v1.25H7.192V19z");
}
</style><path class="tr_651qfv"/>`,
		"fallback": "material-symbols-light:format-size",
	});
}

export default Component;
