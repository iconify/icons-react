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
		"content": `<style>.c0npih3ze {
  fill: currentColor;
  d: path("M6 10.919V4a1 1 0 0 1 1-1h8a5 5 0 0 1 5 5v11h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1v-4.078c0-1.518.69-2.955 1.877-3.904ZM18 8a3 3 0 0 0-3-3H8v4.539a5 5 0 0 1 5.123.679l1 .8A5 5 0 0 1 16 14.922V19h2Z");
}
</style><path class="c0npih3ze"/>`,
		"fallback": "coolicons:building-3-fill-round",
	});
}

export default Component;
