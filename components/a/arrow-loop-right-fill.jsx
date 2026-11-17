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
		"content": `<style>.x8lgcpflz {
  fill: currentColor;
  d: path("M12 17h4.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L16.586 19H12a8 8 0 1 1 8-8a1 1 0 0 1-2 0a6 6 0 0 0-2.685-5.001a6 6 0 0 0-5.65-.528A6.002 6.002 0 0 0 12 17");
}
</style><path class="x8lgcpflz"/>`,
		"fallback": "coolicons:arrow-loop-right-fill",
	});
}

export default Component;
