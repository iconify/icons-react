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
		"content": `<style>.litsavbfc {
  fill: currentColor;
  d: path("M18 18a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm-11.707-.707L11.586 12L6.293 6.707a.999.999 0 1 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a.999.999 0 1 1-1.414-1.414");
}
</style><path class="litsavbfc"/>`,
		"fallback": "coolicons:chevron-right-to-line-fill",
	});
}

export default Component;
