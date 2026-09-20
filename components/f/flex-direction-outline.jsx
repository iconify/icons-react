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
		"content": `<style>.l719c3w6m {
  fill: currentColor;
  d: path("M3 19v-5.808h7.846V19zm0-8.192V5h7.846v5.808zm1-1h5.846V6H4zM16.942 19l-4.288-4.288l.688-.689l3.1 3.056V5h1v12.079l3.1-3.056l.689.689z");
}
</style><path class="l719c3w6m"/>`,
		"fallback": "material-symbols-light:flex-direction-outline",
	});
}

export default Component;
