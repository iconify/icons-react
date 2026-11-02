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
		"content": `<style>.x1b9j_3vc {
  fill: currentColor;
  d: path("M18 5a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V8.414L6.707 18.707a.999.999 0 1 1-1.414-1.414L15.586 7H10a1 1 0 0 1 0-2Z");
}
</style><path class="x1b9j_3vc"/>`,
		"fallback": "coolicons:arrow-up-right-large-fill-sharp",
	});
}

export default Component;
