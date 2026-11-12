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
		"content": `<style>.t32zbomev {
  fill: currentColor;
  d: path("M15 2a1 1 0 0 1 1 1v5h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-5H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z");
}
</style><path class="t32zbomev"/>`,
		"fallback": "coolicons:boolean-union-fill-sharp",
	});
}

export default Component;
