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
		"content": `<style>.m0pkalbwe {
  fill: currentColor;
  d: path("m13 14.586l7.293-7.293a.999.999 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a.999.999 0 1 1 1.414-1.414Zm1.293-7.293a.999.999 0 1 1 1.414 1.414l-2 2a.999.999 0 1 1-1.414-1.414Zm-6.586 8a.999.999 0 1 1-1.414 1.414l-4-4a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="m0pkalbwe"/>`,
		"fallback": "coolicons:check-all-bulk",
	});
}

export default Component;
