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
		"content": `<style>.canypj9op {
  d: path("M12 7.5V12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.yomctlb4k {
  d: path("M7 17v4l4 -4");
}

.yqc0twwou {
  d: path("M8 13.5h8");
}
</style><g class="hntgybcog"><path class="jq9hovbrs"/><path class="yomctlb4k"/><path class="yqc0twwou"/><path class="canypj9op"/></g>`,
		"fallback": "iconmind:groundedness-score-outline-thin",
	});
}

export default Component;
