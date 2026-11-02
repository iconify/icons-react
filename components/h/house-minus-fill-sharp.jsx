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
		"content": `<style>.awh2r-v2k {
  fill: currentColor;
  d: path("M20.707 10.293A1 1 0 0 1 21 11v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11c0-.265.105-.52.293-.707l8-8a1 1 0 0 1 1.414 0ZM9 15h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2");
}
</style><path class="awh2r-v2k"/>`,
		"fallback": "coolicons:house-minus-fill-sharp",
	});
}

export default Component;
