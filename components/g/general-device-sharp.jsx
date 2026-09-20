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
		"content": `<style>.qw1_j2b3t {
  fill: currentColor;
  d: path("M8 18V3h8v15zm0 3v-2h8v2z");
}
</style><path class="qw1_j2b3t"/>`,
		"fallback": "material-symbols:general-device-sharp",
	});
}

export default Component;
