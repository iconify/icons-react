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
		"content": `<style>.ae-e09b3w {
  d: path("M3 12h18");
}

.dlkpyyv9b {
  d: path("M9 6v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kzxwn_jgc {
  d: path("M15 12v6");
}

.sk-a6mb_r {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="sk-a6mb_r"/><path class="ae-e09b3w"/><path class="dlkpyyv9b"/><path class="kzxwn_jgc"/></g>`,
		"fallback": "iconmind:firewall-outline-thin",
	});
}

export default Component;
