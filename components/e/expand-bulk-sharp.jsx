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
		"content": `<style>.o4nd5ibfn {
  fill: currentColor;
  d: path("M20 3a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V5h-5a1 1 0 0 1 0-2ZM4 21a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2Z");
}
</style><path class="o4nd5ibfn"/>`,
		"fallback": "coolicons:expand-bulk-sharp",
	});
}

export default Component;
