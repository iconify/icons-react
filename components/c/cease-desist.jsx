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
		"content": `<style>.dvrle9buh {
  d: path("M8.25 6.25h7.5m-.47 9.7l-1.33 1.33q-.42.42-1.02.42h-1.86q-.6 0-1.02-.42l-1.33-1.33q-.42-.42-.42-1.02v-1.86q0-.6.42-1.02l1.33-1.33q.42-.42 1.02-.42h1.86q.6 0 1.02.42l1.33 1.33q.42.42.42 1.02v1.86q0 .6-.42 1.02M10.25 14h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x00qgzx7x {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="x00qgzx7x"/><path class="dvrle9buh"/></g>`,
		"fallback": "iconoven:cease-desist",
	});
}

export default Component;
