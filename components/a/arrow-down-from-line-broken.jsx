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
		"content": `<style>.cjmocgbdu {
  d: path("M20 3H16M12 3H4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xwy_nd-iu {
  d: path("M12 8L12 21M16 16.625L12 21L8 16.625");
}
</style><g class="hntgybcog"><path class="cjmocgbdu"/><path class="xwy_nd-iu"/></g>`,
		"fallback": "solar:arrow-down-from-line-broken",
	});
}

export default Component;
