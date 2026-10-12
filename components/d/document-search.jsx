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

.it-qfxbvy {
  d: path("M11.75 21.25h-4.5a2.5 2.5 0 0 1-2.5-2.5V5.25a2.5 2.5 0 0 1 2.5-2.5h6.5l5.5 5.5v3.5");
}

.jl89vdx1k {
  d: path("m18.75 18.75l2 2");
}

.lv8e-1bja {
  cx: 16.75px;
  cy: 16.75px;
  r: 2.75px;
}

.wmgztcjui {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5m-11 4h4");
}
</style><g class="hntgybcog"><path class="it-qfxbvy"/><path class="wmgztcjui"/><circle class="lv8e-1bja"/><path class="jl89vdx1k"/></g>`,
		"fallback": "iconoven:document-search",
	});
}

export default Component;
