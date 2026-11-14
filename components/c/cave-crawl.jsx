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

.ko9do2lcy {
  d: path("m3.044 17.826l1.85-7.403a1.75 1.75 0 0 1 .397-.747l3.623-4.025a1.75 1.75 0 0 1 1.459-.572l3.937.358a1.75 1.75 0 0 1 1.15.58l3.254 3.662a1.75 1.75 0 0 1 .39.738l1.852 7.409A1.75 1.75 0 0 1 19.259 20H4.741a1.75 1.75 0 0 1-1.697-2.174");
}

.qobmkes1t {
  d: path("M6.5 20v-4a5.5 5.5 0 0 1 11 0v4");
}

.ye1w1bb5x {
  d: path("M9.25 15.5h5.5m-2-2l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="ko9do2lcy"/><path class="qobmkes1t"/><path class="ye1w1bb5x"/></g>`,
		"fallback": "uix:cave-crawl",
	});
}

export default Component;
