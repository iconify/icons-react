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
		"content": `<style>.oyz2z7bvl {
  fill: currentColor;
  d: path("M21.406 6.086A1 1 0 0 1 21 8H3a1 1 0 0 1-.406-1.914l9-4a1 1 0 0 1 .812 0ZM7 17a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0ZM3 20h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><path class="oyz2z7bvl"/>`,
		"fallback": "coolicons:bank-fill-sharp",
	});
}

export default Component;
