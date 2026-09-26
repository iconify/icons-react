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
		"content": `<style>.berc0-8ws {
  d: path("M2 11.5L12.5 11.5L12.5 22M2.7071 21.2929L12.3536 11.6464");
}

.fkgek20zv {
  stroke-opacity: 0.4;
  d: path("M9.5 3L14.5 3M21 9.5L21 14.5M3 8L3 3L7 3M17 3L21 3L21 7M16 21L21.0001 21L21 17");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="gp_8x1bzb"><path class="fkgek20zv"/><path class="berc0-8ws"/></g>`,
		"fallback": "keyline-icons:arrow-in-up-right-dashed-panel-sharp-duotone",
	});
}

export default Component;
