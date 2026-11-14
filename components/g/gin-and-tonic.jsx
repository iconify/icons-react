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
		"content": `<style>.gsnxmxbsj {
  d: path("M5.867 6h7.266a1.75 1.75 0 0 1 1.747 1.863l-.774 12a1.75 1.75 0 0 1-1.747 1.637H6.641a1.75 1.75 0 0 1-1.747-1.637l-.774-12A1.75 1.75 0 0 1 5.867 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rvpuqt4rh {
  d: path("M12 6a4 4 0 0 1 8 0Zm4 0V2.5M6 11h7.5");
}
</style><g class="hntgybcog"><path class="gsnxmxbsj"/><path class="rvpuqt4rh"/></g>`,
		"fallback": "uix:gin-and-tonic",
	});
}

export default Component;
