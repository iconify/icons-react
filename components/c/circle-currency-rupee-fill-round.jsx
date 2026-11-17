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
		"content": `<style>.e53f4zb-t {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m7-6a1 1 0 0 0 0 2h2c.715 0 1.376.38 1.733 1H9a1 1 0 0 0 0 2h3.733A2 2 0 0 1 11 12H9a1.002 1.002 0 0 0-.707 1.707l4 4a.999.999 0 1 0 1.414-1.414l-2.312-2.312A4.01 4.01 0 0 0 14.874 11H15a1 1 0 0 0 0-2h-.126a4 4 0 0 0-.409-1H15a1 1 0 0 0 0-2Z");
}
</style><path class="e53f4zb-t"/>`,
		"fallback": "coolicons:circle-currency-rupee-fill-round",
	});
}

export default Component;
