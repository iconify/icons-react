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
		"content": `<style>.cmfenk13t {
  fill: currentColor;
  d: path("M21.901 8H2.099A5.01 5.01 0 0 1 7 4h10a5.01 5.01 0 0 1 4.901 4M22 10v5a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20H7a5 5 0 0 1-5-5v-5Zm-11 4H7a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2");
}
</style><path class="cmfenk13t"/>`,
		"fallback": "coolicons:credit-card-fill-round",
	});
}

export default Component;
