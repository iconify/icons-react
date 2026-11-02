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
		"content": `<style>.jshi5b63l {
  fill: currentColor;
  d: path("M14.586 9H9a.997.997 0 0 0-1 1v11a1 1 0 0 1-2 0V10a3 3 0 0 1 3-3h5.586l-3.293-3.293a.999.999 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a.999.999 0 1 1-1.414-1.414Z");
}
</style><path class="jshi5b63l"/>`,
		"fallback": "coolicons:arrow-turn-up-right-bulk",
	});
}

export default Component;
