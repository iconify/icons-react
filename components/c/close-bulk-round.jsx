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
		"content": `<style>.nonu48a3p {
  fill: currentColor;
  d: path("m12 10.586l5.293-5.293a.999.999 0 1 1 1.414 1.414L13.414 12l5.293 5.293a.999.999 0 1 1-1.414 1.414L12 13.414l-5.293 5.293a.999.999 0 1 1-1.414-1.414L10.586 12L5.293 6.707a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="nonu48a3p"/>`,
		"fallback": "coolicons:close-bulk-round",
	});
}

export default Component;
