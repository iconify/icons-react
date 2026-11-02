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
		"content": `<style>.on04bi53g {
  fill: currentColor;
  d: path("M18.586 10H5a.997.997 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h13.586l-2.293-2.293a.999.999 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a.999.999 0 1 1-1.414-1.414Z");
}
</style><path class="on04bi53g"/>`,
		"fallback": "coolicons:forward-bulk",
	});
}

export default Component;
