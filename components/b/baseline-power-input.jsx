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
		"content": `<style>.q5uduuxtq {
  fill: currentColor;
  d: path("M2 9v2h19V9zm0 6h5v-2H2zm7 0h5v-2H9zm7 0h5v-2h-5z");
}
</style><path class="q5uduuxtq"/>`,
		"fallback": "ic:baseline-power-input",
	});
}

export default Component;
