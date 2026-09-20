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
		"content": `<style>.f-t_rcb_j {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6fi9qmtq {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.l2xbekbrl {
  d: path("M13.5 11.33a3.5 3.5 0 1 1 -2.96 0");
}

.mqtixbwqo {
  d: path("M2 8h20");
}
</style><g class="hntgybcog"><path class="f-t_rcb_j"/><path class="k6fi9qmtq"/><path class="mqtixbwqo"/><path class="l2xbekbrl"/></g>`,
		"fallback": "iconmind:browser-agent-duotone-thin",
	});
}

export default Component;
