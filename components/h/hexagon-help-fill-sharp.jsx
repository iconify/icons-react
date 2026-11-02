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
		"content": `<style>.ikcre4bcb {
  fill: currentColor;
  d: path("M20.447 6.106A1 1 0 0 1 21 7v10a1 1 0 0 1-.553.894l-8 4a1 1 0 0 1-.894 0l-8-4A1 1 0 0 1 3 17V7c0-.379.214-.725.553-.894l8-4a1 1 0 0 1 .894 0ZM9 11a1 1 0 0 0 2 0a1.001 1.001 0 0 1 1.707-.707a1 1 0 0 1 .215 1.094A.99.99 0 0 1 12 12a1 1 0 0 0 0 2a3 3 0 1 0-3-3m3 4a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="ikcre4bcb"/>`,
		"fallback": "coolicons:hexagon-help-fill-sharp",
	});
}

export default Component;
