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
		"content": `<style>.beqvkx5mb {
  d: path("m14.75 17.75l1.75 1.75l3.5-3.75");
}

.c9elq579y {
  d: path("M4.25 6.25c0 1.95 3.45 3.5 7.75 3.5s7.75-1.55 7.75-3.5M4.25 12c0 1.95 3.45 3.5 7.75 3.5s7.75-1.55 7.75-3.5");
}

.dm6fc8-ju {
  d: path("M4.25 6.25c0-1.95 3.45-3.5 7.75-3.5s7.75 1.55 7.75 3.5v11.5c0 1.95-3.45 3.5-7.75 3.5s-7.75-1.55-7.75-3.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jf0axzbmx {
  cx: 17.5px;
  cy: 17.5px;
  r: 6px;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><mask id="SVGsZ1vtcCp" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><path class="py7ktqbvf"/><circle class="jf0axzbmx"/></mask><g class="hntgybcog"><g mask="url(#SVGsZ1vtcCp)"><path class="dm6fc8-ju"/><path class="c9elq579y"/></g><path class="beqvkx5mb"/></g>`,
		"fallback": "iconoven:database-check",
	});
}

export default Component;
