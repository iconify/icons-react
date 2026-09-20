import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tdmomhoym {
  fill: currentColor;
  d: path("M14.314 3.146a.5.5 0 0 0-.707.708L16.253 6.5H12A2.5 2.5 0 0 0 9.5 9v2A1.5 1.5 0 0 1 8 12.5h-.041a3 3 0 1 0 0 1H8a2.5 2.5 0 0 0 2.5-2.5V9A1.5 1.5 0 0 1 12 7.5h4.253l-2.646 2.646a.5.5 0 1 0 .707.707l3.5-3.5a.5.5 0 0 0 0-.707zM7 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}
</style><path class="tdmomhoym"/>`,
		"fallback": "fluent:arrow-flow-up-right-20-regular",
	});
}

export default Component;
