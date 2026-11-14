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

.icc51dv7c {
  d: path("m7.25 4.433l2.181 1.259a1.5 1.5 0 0 1 .75 1.299v2.518a1.5 1.5 0 0 1-.75 1.299L7.25 12.067a1.5 1.5 0 0 1-1.5 0l-2.181-1.259a1.5 1.5 0 0 1-.75-1.299V6.991a1.5 1.5 0 0 1 .75-1.299L5.75 4.433a1.5 1.5 0 0 1 1.5 0");
}

.q5md66b1x {
  fill: currentColor;
  d: path("m14.5 4.433l2.181 1.259a1.5 1.5 0 0 1 .75 1.299v2.518a1.5 1.5 0 0 1-.75 1.299L14.5 12.067a1.5 1.5 0 0 1-1.5 0l-2.181-1.259a1.5 1.5 0 0 1-.75-1.299V6.991a1.5 1.5 0 0 1 .75-1.299L13 4.433a1.5 1.5 0 0 1 1.5 0m-3.5 6.5l2.181 1.259a1.5 1.5 0 0 1 .75 1.299v2.518a1.5 1.5 0 0 1-.75 1.299L11 18.567a1.5 1.5 0 0 1-1.5 0l-2.181-1.259a1.5 1.5 0 0 1-.75-1.299v-2.518a1.5 1.5 0 0 1 .75-1.299L9.5 10.933a1.5 1.5 0 0 1 1.5 0");
}

.tb6jd8bqk {
  d: path("m18.25 10.933l2.181 1.259a1.5 1.5 0 0 1 .75 1.299v2.518a1.5 1.5 0 0 1-.75 1.299l-2.181 1.259a1.5 1.5 0 0 1-1.5 0l-2.181-1.259a1.5 1.5 0 0 1-.75-1.299v-2.518a1.5 1.5 0 0 1 .75-1.299l2.181-1.259a1.5 1.5 0 0 1 1.5 0");
}
</style><g class="hntgybcog"><path class="icc51dv7c"/><path class="q5md66b1x"/><path class="tb6jd8bqk"/></g>`,
		"fallback": "uix:chart-hexbin",
	});
}

export default Component;
