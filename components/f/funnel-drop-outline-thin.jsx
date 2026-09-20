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
		"content": `<style>.c3wl0l-ou {
  d: path("M19 13v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.wlp3ibbib {
  d: path("M6 13h12");
}

.yhbiuccel {
  d: path("m16 16 3 3 3 -3");
}
</style><g class="hntgybcog"><path class="ozi-k-boi"/><path class="wlp3ibbib"/><path class="c3wl0l-ou"/><path class="yhbiuccel"/></g>`,
		"fallback": "iconmind:funnel-drop-outline-thin",
	});
}

export default Component;
