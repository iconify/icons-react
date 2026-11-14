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
		"content": `<style>.ggazckbay {
  d: path("M8.5 3L2.75 6l1.75 4.5L6 9.75V20.5h12V9.75l1.5.75L21.25 6L15.5 3a3.5 3.5 0 0 1-7 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ni4_rbbkh {
  d: path("M13.112 11.196a3.25 3.25 0 0 1 1.942 1.942m0 2.224a3.25 3.25 0 0 1-1.942 1.942m-2.224 0a3.25 3.25 0 0 1-1.942-1.942m0-2.224a3.25 3.25 0 0 1 1.942-1.942M12 14.25h.01");
}
</style><g class="hntgybcog"><path class="ggazckbay"/><path class="ni4_rbbkh"/></g>`,
		"fallback": "uix:custom-print-shirt",
	});
}

export default Component;
