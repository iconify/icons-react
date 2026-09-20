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
		"content": `<style>.haaojh5gc {
  d: path("M16 7h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kc2bz0p3g {
  d: path("M4 7h4");
}

.mh3_-obpm {
  d: path("M20 12a8 8 0 0 1 -16 0");
}
</style><g class="hntgybcog"><path class="kc2bz0p3g"/><path class="haaojh5gc"/><path class="mh3_-obpm"/></g>`,
		"fallback": "iconmind:contentment-outline-thin",
	});
}

export default Component;
