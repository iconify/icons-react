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
		"content": `<style>.bv2mq5fcc {
  d: path("M4.5 10v5.5h15V10M12 15.5v6m-6 0l6-3l6 3");
}

.hmdu97b1o {
  d: path("M12 2.5zA4.5 4.5 0 0 1 16.5 7v1a4.5 4.5 0 0 1-4.5 4.5A4.5 4.5 0 0 1 7.5 8V7A4.5 4.5 0 0 1 12 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hmdu97b1o"/><path class="bv2mq5fcc"/></g>`,
		"fallback": "uix:executive-chair",
	});
}

export default Component;
