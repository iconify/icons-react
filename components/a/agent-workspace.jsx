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
		"content": `<style>.ciid5bzeo {
  d: path("M8.5 9.5v-.75a3.5 3.5 0 0 1 7 0v.75m-7.5 7c0-1.9 1.8-3.25 4-3.25s4 1.35 4 3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lcrbz137h {
  d: path("M10.25 8.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.vjhci854a {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5V13a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13V6.5A3.5 3.5 0 0 1 6 3m6 13.5v4m-3.5 0h7");
}
</style><g class="hntgybcog"><path class="vjhci854a"/><path class="lcrbz137h"/><path class="ciid5bzeo"/></g>`,
		"fallback": "uix:agent-workspace",
	});
}

export default Component;
