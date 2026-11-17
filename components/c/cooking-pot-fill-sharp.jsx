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
		"content": `<style>.v33kzxoct {
  fill: currentColor;
  d: path("M14 5h-1v1.066A7.5 7.5 0 0 1 18.634 10H5.366A7.51 7.51 0 0 1 11 6.066V5h-1a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m6 8h1a1 1 0 0 1 0 2h-1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5H3a1 1 0 0 1 0-2h1v-1h16Z");
}
</style><path class="v33kzxoct"/>`,
		"fallback": "coolicons:cooking-pot-fill-sharp",
	});
}

export default Component;
