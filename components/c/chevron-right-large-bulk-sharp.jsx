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
		"content": `<style>.h0a7fgn5x {
  fill: currentColor;
  d: path("M13.586 12L8.293 6.707a.999.999 0 1 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a.999.999 0 1 1-1.414-1.414Z");
}
</style><path class="h0a7fgn5x"/>`,
		"fallback": "coolicons:chevron-right-large-bulk-sharp",
	});
}

export default Component;
