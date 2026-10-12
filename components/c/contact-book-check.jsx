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
		"content": `<style>.a5e4ldbvo {
  d: path("M8.5 16.25c.6-1.5 2-2.25 3.5-2.25s2.9.75 3.5 2.25");
}

.beqvkx5mb {
  d: path("m14.75 17.75l1.75 1.75l3.5-3.75");
}

.dnp2npbye {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2.5px;
}

.fi30ryb2d {
  d: path("M3.25 7.5h3m-3 4.5h3m-3 4.5h3");
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

.pc0povb4n {
  cx: 12px;
  cy: 10px;
  r: 2.25px;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><mask id="SVGsZ1vtcCp" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><path class="py7ktqbvf"/><circle class="jf0axzbmx"/></mask><g class="hntgybcog"><g mask="url(#SVGsZ1vtcCp)"><rect class="dnp2npbye"/><path class="fi30ryb2d"/><circle class="pc0povb4n"/><path class="a5e4ldbvo"/></g><path class="beqvkx5mb"/></g>`,
		"fallback": "iconoven:contact-book-check",
	});
}

export default Component;
