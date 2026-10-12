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

.o019cd_5e {
  stroke-opacity: 0.4;
  d: path("M6.7071 3.7071L12 9L17.2929 3.7071");
}

.p5pdrebjg {
  d: path("M6.7071 20.2929L12 15L17.2929 20.2929");
}
</style><g class="gp_8x1bzb"><path class="o019cd_5e"/><path class="p5pdrebjg"/></g>`,
		"fallback": "keyline-icons:chevrons-down-up-sharp-duotone",
	});
}

export default Component;
