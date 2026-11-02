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
		"content": `<style>.s5ws0xb5u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7 15l3-3l-3-3m3 3H3m14-3l-3 3l3 3m-3-3h7m-9-8v4m0 8v4");
}
</style><path class="s5ws0xb5u"/>`,
		"fallback": "coolicons:fold-horizontal-duotone",
	});
}

export default Component;
