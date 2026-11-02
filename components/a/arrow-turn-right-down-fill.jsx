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
		"content": `<style>.t_plekbbk {
  fill: currentColor;
  d: path("M14 6a3 3 0 0 1 3 3v5.586l3.293-3.293a.999.999 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a.999.999 0 1 1 1.414-1.414L15 14.586V9a.997.997 0 0 0-1-1H3a1 1 0 0 1 0-2Z");
}
</style><path class="t_plekbbk"/>`,
		"fallback": "coolicons:arrow-turn-right-down-fill",
	});
}

export default Component;
