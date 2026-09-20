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
		"content": `<style>.yd1_0gbkc {
  fill: currentColor;
  d: path("M11 22v-5H6v-3h5v-4H3V7h8V2h2v5h8v3h-8v4h5v3h-5v5z");
}
</style><path class="yd1_0gbkc"/>`,
		"fallback": "material-symbols:align-horizontal-center-outline",
	});
}

export default Component;
