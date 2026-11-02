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
		"content": `<style>.ltlsmruzv {
  fill: currentColor;
  d: path("m12 11.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a.999.999 0 1 1-1.414 1.414Z");
}
</style><path class="ltlsmruzv"/>`,
		"fallback": "coolicons:chevron-up-fill-sharp",
	});
}

export default Component;
