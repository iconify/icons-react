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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.gxhti5bxu {
  d: path("M12 18L5 6L19 6L12 18Z");
}

.v28rbkb2v {
  fill: currentColor;
  d: path("M11.544 17.7413L5.0727 6.7841C4.8674 6.4365 5.1213 6 5.5287 6L18.4713 6C18.8787 6 19.1326 6.4365 18.9273 6.7841L12.456 17.7413C12.2523 18.0862 11.7477 18.0862 11.544 17.7413Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="v28rbkb2v"/><path class="gxhti5bxu"/></g>`,
		"fallback": "keyline-icons:caret-down-sharp-fill",
	});
}

export default Component;
