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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o5odw2bar {
  d: path("M8.5 15.25L12 17l3.5-1.75M12 17v3.5");
}

.qmptz25oz {
  d: path("m4.422 9.714l5.875-5.011a2.625 2.625 0 0 1 3.406 0l5.875 5.011a2.63 2.63 0 0 1 .922 1.997v6.164a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 17.875v-6.164a2.63 2.63 0 0 1 .922-1.997");
}

.tknq4nnhp {
  d: path("m12 13.5l3.5 1.75v3.5L12 20.5l-3.5-1.75v-3.5Z");
}

.y6rk-dhbm {
  d: path("M6 20.5v-9.75h12v9.75");
}
</style><g class="hntgybcog"><path class="qmptz25oz"/><path class="tknq4nnhp"/><path class="y6rk-dhbm"/><path class="o5odw2bar"/></g>`,
		"fallback": "uix:delivery-safe-place",
	});
}

export default Component;
