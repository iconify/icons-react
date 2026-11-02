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
		"content": `<style>.akj8vpb2z {
  fill: currentColor;
  d: path("M9.414 11H17a1 1 0 0 1 0 2H9.414l2.293 2.293a.999.999 0 1 1-1.414 1.414l-4-4a.997.997 0 0 1 0-1.414l4-4a.999.999 0 1 1 1.414 1.414Z");
}
</style><path class="akj8vpb2z"/>`,
		"fallback": "coolicons:arrow-left-small-bulk",
	});
}

export default Component;
