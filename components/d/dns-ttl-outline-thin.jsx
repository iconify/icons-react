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
		"content": `<style>.ermdcdc5z {
  d: path("M3 11.5A2.5 2.5 0 0 1 5.5 9h13a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-13A2.5 2.5 0 0 1 3 11.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.rllhknboo {
  d: path("M3 19.5A2.5 2.5 0 0 1 5.5 17h6a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-6A2.5 2.5 0 0 1 3 19.5");
}
</style><g class="hntgybcog"><path class="k6nj2fbya"/><path class="ermdcdc5z"/><path class="rllhknboo"/></g>`,
		"fallback": "iconmind:dns-ttl-outline-thin",
	});
}

export default Component;
