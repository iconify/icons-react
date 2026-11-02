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
		"content": `<style>.w41rlbb5w {
  fill: currentColor;
  d: path("m12 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414L13.414 12l3.293 3.293a.999.999 0 1 1-1.414 1.414L12 13.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414L10.586 12L7.293 8.707a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="w41rlbb5w"/>`,
		"fallback": "coolicons:close-small-bulk-sharp",
	});
}

export default Component;
