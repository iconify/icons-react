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
		"content": `<style>.oi4vo2skc {
  fill: currentColor;
  d: path("M5 6v12a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0m10.293 9.293L17.586 13H8a1 1 0 0 1 0-2h9.586l-2.293-2.293a.999.999 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a.999.999 0 1 1-1.414-1.414");
}
</style><path class="oi4vo2skc"/>`,
		"fallback": "coolicons:arrow-right-from-line-fill-round",
	});
}

export default Component;
