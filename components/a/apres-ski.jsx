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
		"content": `<style>.e6o6rkbjq {
  d: path("m8.107 10.034l.247.034a2.625 2.625 0 0 1 2.235 2.965l-.731 5.199a2.625 2.625 0 0 1-2.965 2.234l-.247-.034a2.625 2.625 0 0 1-2.235-2.965l.731-5.199a2.625 2.625 0 0 1 2.965-2.234");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j6xoyvbrn {
  d: path("m5.194 11.896l-2.228-.313l-.661 4.704l2.228.313m11.113-6.532l.247-.034a2.625 2.625 0 0 1 2.965 2.234l.731 5.199a2.625 2.625 0 0 1-2.235 2.965l-.247.034a2.625 2.625 0 0 1-2.965-2.234l-.731-5.199a2.625 2.625 0 0 1 2.235-2.965");
}

.sgu1u_bco {
  d: path("m18.806 11.896l2.228-.313l.661 4.704l-2.228.313M7.5 7.5c-1-1.25 1-2.5 0-4m9 4c1-1.25-1-2.5 0-4");
}
</style><g class="hntgybcog"><path class="e6o6rkbjq"/><path class="j6xoyvbrn"/><path class="sgu1u_bco"/></g>`,
		"fallback": "uix:apres-ski",
	});
}

export default Component;
