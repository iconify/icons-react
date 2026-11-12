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
		"content": `<style>.i2pso1byg {
  fill: currentColor;
  d: path("M3 4h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m6.707 5.707L8.414 11h7.172l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L15.586 13H8.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414M3 18h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><path class="i2pso1byg"/>`,
		"fallback": "coolicons:bandwidth-fill-round",
	});
}

export default Component;
