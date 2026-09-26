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

.h0eqbkbhb {
  stroke-opacity: 0.4;
  d: path("M1.9417 19.6637L7.1788 5L12.4158 19.6637M3.9645 14L10.3931 14");
}

.s-3hk0-1j {
  d: path("M15.6146 19.7127L18.8284 9L22.0422 19.7127M16.7284 16L20.9284 16");
}
</style><g class="gp_8x1bzb"><path class="h0eqbkbhb"/><path class="s-3hk0-1j"/></g>`,
		"fallback": "keyline-icons:case-upper-sharp-duotone",
	});
}

export default Component;
