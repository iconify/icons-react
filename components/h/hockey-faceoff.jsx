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
		"content": `<style>.dudaksb-w {
  d: path("m7.5 7l6.5 7.5h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.rioyt0-rj {
  d: path("M16.5 7L10 14.5H7.5m3 3.25h3");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="dudaksb-w"/><path class="rioyt0-rj"/></g>`,
		"fallback": "uix:hockey-faceoff",
	});
}

export default Component;
