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
		"content": `<style>.zrec87wmt {
  fill: currentColor;
  d: path("M8 12a3 3 0 0 0 3 3h3.586l-3.293-3.293a.999.999 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a.999.999 0 1 1-1.414-1.414L14.586 17H11a5 5 0 0 1-5-5V3a1 1 0 0 1 2 0Z");
}
</style><path class="zrec87wmt"/>`,
		"fallback": "coolicons:arrow-turn-down-right-fill-round",
	});
}

export default Component;
