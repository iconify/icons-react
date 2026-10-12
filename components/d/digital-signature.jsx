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

.ye7vcbcry {
  width: 13px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2px;
}

.yky7fsbzt {
  d: path("M7 7h6.5M7 10h6.5m-6.75 6.5c.9-1.9 1.9-1.9 2.2 0s1.4 1.9 2.3 0m9.58-8.42l-1.16-1.16q-.42-.42-.84 0l-5.16 5.16q-.42.42-.58 1l-.43 1.59q-.16.58.42.42l1.59-.43q.58-.16 1-.58l5.16-5.16q.42-.42 0-.84");
}
</style><g class="hntgybcog"><rect class="ye7vcbcry"/><path class="yky7fsbzt"/></g>`,
		"fallback": "iconoven:digital-signature",
	});
}

export default Component;
