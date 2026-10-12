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
		"content": `<style>.fqspdobtc {
  width: 18.5px;
  height: 11.5px;
  x: 2.75px;
  y: 9.75px;
  rx: 2.5px;
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

.notrppkqh {
  d: path("M14.75 17.5h5.5");
}

.p8f0y4p3y {
  width: 18.5px;
  height: 4.25px;
  x: 2.75px;
  y: 3px;
  rx: 1.25px;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.rs_ux8b0z {
  d: path("m8.25 3l-2 4.25m7-4.25l-2 4.25m7-4.25l-2 4.25");
}
</style><mask id="SVGsZ1vtcCp" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><path class="py7ktqbvf"/><circle class="jf0axzbmx"/></mask><g class="hntgybcog"><g mask="url(#SVGsZ1vtcCp)"><rect class="fqspdobtc"/><rect class="p8f0y4p3y"/><path class="rs_ux8b0z"/></g><path class="notrppkqh"/></g>`,
		"fallback": "iconoven:clapperboard-minus",
	});
}

export default Component;
