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
		"content": `<style>.d_nzmcbuz {
  d: path("M2.5 9c0-3.5 2.5-6 6-6C11.75 3 14 5.5 14 8.75c0 2.75-1.5 4-2.75 5.25S10 16.5 9.5 18.5C9 20.25 7.5 21 6 21c-2 0-3.5-1.5-3.5-3.5");
}

.hc_qufb7w {
  d: path("M19.975 5.375a13.25 13.25 0 0 1 0 13.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y6543hbto {
  d: path("M5.5 9c0-1.75 1.25-3 3-3s2.75 1.25 2.75 2.75m4.213-1.625a8.5 8.5 0 0 1 0 9.75m2.252-11.328a11.25 11.25 0 0 1 0 12.906");
}
</style><g class="hntgybcog"><path class="d_nzmcbuz"/><path class="y6543hbto"/><path class="hc_qufb7w"/></g>`,
		"fallback": "uix:hearing-test",
	});
}

export default Component;
