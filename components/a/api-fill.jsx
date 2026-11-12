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
		"content": `<style>.l0zulnbdn {
  fill: currentColor;
  d: path("M7.707 8.707L4.414 12l3.293 3.293a.999.999 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a.999.999 0 1 1 1.414 1.414m10-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a.999.999 0 1 1-1.414-1.414L19.586 12l-3.293-3.293a.999.999 0 1 1 1.414-1.414M10 11h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2");
}
</style><path class="l0zulnbdn"/>`,
		"fallback": "coolicons:api-fill",
	});
}

export default Component;
