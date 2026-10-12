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
		"content": `<style>.c2mdn4r1o {
  d: path("M2.75 13.15a3.25 3.25 0 0 1 5.06.73m8.38 0a3.25 3.25 0 0 1 5.06-.73");
}

.c79v2o9xe {
  cx: 12px;
  cy: 9.5px;
  r: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l33zoes5a {
  cx: 19px;
  cy: 7px;
  r: 2px;
}

.vwl1wf1bw {
  cx: 5px;
  cy: 7px;
  r: 2px;
}

.w20iw8b0m {
  d: path("M6.5 20.5a5.5 5.5 0 0 1 11 0Z");
}
</style><g class="hntgybcog"><circle class="vwl1wf1bw"/><circle class="l33zoes5a"/><path class="c2mdn4r1o"/><circle class="c79v2o9xe"/><path class="w20iw8b0m"/></g>`,
		"fallback": "iconoven:followers-group",
	});
}

export default Component;
