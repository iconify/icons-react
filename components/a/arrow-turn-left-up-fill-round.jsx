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
		"content": `<style>.uk2rrg9ce {
  fill: currentColor;
  d: path("M9 9.414V13a3 3 0 0 0 3 3h9a1 1 0 0 1 0 2h-9a5 5 0 0 1-5-5V9.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414l5-5a.997.997 0 0 1 1.414 0l5 5a.999.999 0 1 1-1.414 1.414Z");
}
</style><path class="uk2rrg9ce"/>`,
		"fallback": "coolicons:arrow-turn-left-up-fill-round",
	});
}

export default Component;
