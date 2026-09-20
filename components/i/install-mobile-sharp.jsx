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
		"content": `<style>.ogxzxcc_g {
  fill: currentColor;
  d: path("M5 23V1h9v5H7v12h10v-2h2v7zm13-9l-5-5l1.4-1.4l2.6 2.6V3h2v7.2l2.6-2.6L23 9z");
}
</style><path class="ogxzxcc_g"/>`,
		"fallback": "material-symbols:install-mobile-sharp",
	});
}

export default Component;
