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
		"content": `<style>.odxisxbfp {
  fill: currentColor;
  d: path("M8 19h3v3h2v-3h3l-4-4zm8-15h-3V1h-2v3H8l4 4zM4 9v2h16V9zm0 3h16v2H4z");
}
</style><path class="odxisxbfp"/>`,
		"fallback": "ic:baseline-compress",
	});
}

export default Component;
