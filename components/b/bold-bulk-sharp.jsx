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
		"content": `<style>.l-n22ftkh {
  fill: currentColor;
  d: path("M5 11V5a1 1 0 0 1 1-1h6a4 4 0 0 1 3.352 6.185A5 5 0 0 1 14 20H6a1 1 0 0 1-1-1Zm2 1v6h7a3 3 0 1 0 0-6Zm5-2a1.999 1.999 0 0 0 1.732-3A2 2 0 0 0 12 6H7v4Z");
}
</style><path class="l-n22ftkh"/>`,
		"fallback": "coolicons:bold-bulk-sharp",
	});
}

export default Component;
