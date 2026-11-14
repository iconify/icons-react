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
		"content": `<style>.c3wgojkty {
  d: path("M18 15v6m-3-3h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lfx0agbmq {
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4 21c0-4 3.5-6.5 8-6.5c1.147 0 2.23.163 3.206.471");
}

.v5ekr8o2v {
  fill: currentColor;
  d: path("M12 3.5a4 4 0 0 0 0 8Zm0 11c-4.5 0-8 2.5-8 6.5h8Z");
}
</style><g class="hntgybcog"><path class="lfx0agbmq"/><path class="v5ekr8o2v"/><path class="c3wgojkty"/></g>`,
		"fallback": "uix:diversity-hiring",
	});
}

export default Component;
