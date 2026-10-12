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

.rpt7tg9rn {
  d: path("M5.75 3.25h12.5m-6.25 11V7m-3.25 3L12 6.75L15.25 10");
}

.xmjlrzbuo {
  cx: 12px;
  cy: 17.75px;
  r: 2.75px;
}
</style><g class="hntgybcog"><circle class="xmjlrzbuo"/><path class="rpt7tg9rn"/></g>`,
		"fallback": "iconoven:git-push",
	});
}

export default Component;
