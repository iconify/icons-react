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
		"content": `<style>.by20htb6a {
  stroke-opacity: 0.4;
  d: path("M9.5 3L14.5 3M17 3L21 3L21 7M21 9.5L21 14.5M21 17L21 21L17 21M14.5 21L9.5 21");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t4cqwicoe {
  d: path("M7 21L3 21L3 3L7 3");
}
</style><g class="gp_8x1bzb"><path class="by20htb6a"/><path class="t4cqwicoe"/></g>`,
		"fallback": "keyline-icons:border-left-sharp-duotone",
	});
}

export default Component;
