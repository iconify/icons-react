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
		"content": `<style>.s7gzbx51d {
  fill: currentColor;
  d: path("M18 14a3 3 0 0 1-3 3H9.414l3.293 3.293a.999.999 0 1 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L9.414 15H15a.997.997 0 0 0 1-1V3a1 1 0 0 1 2 0Z");
}
</style><path class="s7gzbx51d"/>`,
		"fallback": "coolicons:arrow-turn-down-left-bulk",
	});
}

export default Component;
