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
		"content": `<style>.alvyp9n1f {
  fill: currentColor;
  d: path("M14.586 13H7a1 1 0 0 1 0-2h7.586l-2.293-2.293a.999.999 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a.999.999 0 1 1-1.414-1.414Z");
}
</style><path class="alvyp9n1f"/>`,
		"fallback": "coolicons:arrow-right-small-bulk-sharp",
	});
}

export default Component;
