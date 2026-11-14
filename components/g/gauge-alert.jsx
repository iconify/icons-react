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
		"content": `<style>.c5nup6bhu {
  fill: currentColor;
  d: path("M10.75 14a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pbdjfqb2z {
  d: path("M3 14a9 9 0 0 1 18 0M3 14h2m7 0l6.25-4.5");
}

.s4k2st-bq {
  d: path("m19.324 16.482l1.5 2.812A1.5 1.5 0 0 1 19.5 21.5h-3a1.5 1.5 0 0 1-1.324-2.206l1.5-2.812a1.5 1.5 0 0 1 2.648 0M18 17.25v1M18 20h.01");
}
</style><g class="hntgybcog"><path class="pbdjfqb2z"/><path class="c5nup6bhu"/><path class="s4k2st-bq"/></g>`,
		"fallback": "uix:gauge-alert",
	});
}

export default Component;
