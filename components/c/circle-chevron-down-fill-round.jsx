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
		"content": `<style>.oo8fb39gf {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10 .586l-2.293-2.293a.999.999 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a.999.999 0 1 0-1.414-1.414Z");
}
</style><path class="oo8fb39gf"/>`,
		"fallback": "coolicons:circle-chevron-down-fill-round",
	});
}

export default Component;
