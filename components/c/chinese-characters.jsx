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
		"content": `<style>.ezuxf0b5c {
  d: path("M6.125 3.5h11.75A2.625 2.625 0 0 1 20.5 6.125v11.75a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 17.875V6.125A2.625 2.625 0 0 1 6.125 3.5M7.5 8h9M12 5v13.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.umey0ho2h {
  d: path("M12 12c-1.5 3-3 4.5-5 5.5m5-5.5c1.5 3 3 4.5 5 5.5");
}
</style><g class="hntgybcog"><path class="ezuxf0b5c"/><path class="umey0ho2h"/></g>`,
		"fallback": "uix:chinese-characters",
	});
}

export default Component;
