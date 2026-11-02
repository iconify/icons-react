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
		"content": `<style>.yany56bxd {
  fill: currentColor;
  d: path("M9 9.414V16h12a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1V9.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414l5-5a.997.997 0 0 1 1.414 0l5 5a.999.999 0 1 1-1.414 1.414Z");
}
</style><path class="yany56bxd"/>`,
		"fallback": "coolicons:arrow-turn-left-up-fill-sharp",
	});
}

export default Component;
