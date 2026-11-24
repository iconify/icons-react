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
		"content": `<style>.t5427h37n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l9 4H3zM5 21v-4h14v4M3 21h18M7 7v10m5-10v10m5-10v10");
}
</style><path class="t5427h37n"/>`,
		"fallback": "coolicons:courthouse-sharp",
	});
}

export default Component;
