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
		"content": `<style>.d9c45zzhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 11a7 7 0 1 1 7 7H5m3-3l-3 3l3 3");
}
</style><path class="d9c45zzhc"/>`,
		"fallback": "coolicons:arrow-loop-left-sharp",
	});
}

export default Component;
