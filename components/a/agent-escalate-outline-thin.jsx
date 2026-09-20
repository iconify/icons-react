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
		"content": `<style>.c3xkdj8uw {
  d: path("M14.5 5H19v4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j2aic6ujd {
  d: path("m12 12 7 -7");
}

.qvqi41cih {
  d: path("M8.69 13.37a4 4 0 1 1 -3.38 0");
}
</style><g class="hntgybcog"><path class="qvqi41cih"/><path class="j2aic6ujd"/><path class="c3xkdj8uw"/></g>`,
		"fallback": "iconmind:agent-escalate-outline-thin",
	});
}

export default Component;
