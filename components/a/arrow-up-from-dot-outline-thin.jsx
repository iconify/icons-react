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
		"content": `<style>.h3z-uye4u {
  d: path("m8 8 4 -4 4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ilxguy6uu {
  d: path("M12 4v10");
}

.k7llgzrde {
  d: path("M10 18.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="k7llgzrde"/><path class="ilxguy6uu"/><path class="h3z-uye4u"/></g>`,
		"fallback": "iconmind:arrow-up-from-dot-outline-thin",
	});
}

export default Component;
