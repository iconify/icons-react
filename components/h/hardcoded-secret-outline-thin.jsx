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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jjxl5r6ig {
  d: path("M10 11.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.k0cylvbvi {
  d: path("M12 14.5h2.5");
}

.le2s8qb-r {
  d: path("M12 13.5V16");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="jjxl5r6ig"/><path class="le2s8qb-r"/><path class="k0cylvbvi"/></g>`,
		"fallback": "iconmind:hardcoded-secret-outline-thin",
	});
}

export default Component;
