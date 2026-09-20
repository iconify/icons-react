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
		"content": `<style>.eg1qu2bhb {
  fill: currentColor;
  d: path("M5 19v-2h14v2zm.35-4L12 5l6.65 10z");
}
</style><path class="eg1qu2bhb"/>`,
		"fallback": "material-symbols:eject",
	});
}

export default Component;
