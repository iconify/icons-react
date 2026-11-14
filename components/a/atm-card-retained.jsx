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
		"content": `<style>.ej_mjlbfk {
  d: path("M8.5 11.5h4v3.25h-4Zm8.25 6h2.5A1.75 1.75 0 0 1 21 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-.5a1.75 1.75 0 0 1 1.75-1.75m-.25 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j5buyqb1k {
  d: path("M4.75 4h14.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H4.75A2.25 2.25 0 0 1 2.5 6.25A2.25 2.25 0 0 1 4.75 4M6 8.5v10q0 .123.012.245t.036.243t.06.238t.082.231q.047.113.105.221q.058.109.126.211q.069.102.146.197q.078.095.165.182t.182.165t.197.146t.211.126q.108.058.221.105q.114.047.231.082t.238.06t.243.036T8.5 21h3.873M18 12.154V8.5");
}
</style><g class="hntgybcog"><path class="j5buyqb1k"/><path class="ej_mjlbfk"/></g>`,
		"fallback": "uix:atm-card-retained",
	});
}

export default Component;
