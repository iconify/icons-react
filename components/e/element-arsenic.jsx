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

.ljs4em1ml {
  d: path("m3.748 11.505l2.28-4.562A4.38 4.38 0 0 1 9.135 4.6l3.715-.697a4.38 4.38 0 0 1 3.763 1.075l2.722 2.496a4.38 4.38 0 0 1 1.385 3.767l-.411 3.291a4.38 4.38 0 0 1-2.588 3.465l-4.319 1.89a4.38 4.38 0 0 1-2.881.219l-3.59-.958a4.38 4.38 0 0 1-3.093-3.076l-.398-1.459a4.38 4.38 0 0 1 .308-3.108");
}

.xzeqa83-v {
  d: path("M8 12q.5-4 4.5-4.75");
}
</style><g class="hntgybcog"><path class="ljs4em1ml"/><path class="xzeqa83-v"/></g>`,
		"fallback": "uix:element-arsenic",
	});
}

export default Component;
