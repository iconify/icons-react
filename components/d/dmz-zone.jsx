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
		"content": `<style>.bpqciuchf {
  width: 3.75px;
  height: 18.5px;
  x: 17.5px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.25px;
}

.bwxp2jbki {
  width: 3.75px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.25px;
}

.fnuhxvbeh {
  width: 6px;
  height: 12px;
  x: 9px;
  y: 6px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.75px;
}

.j7ybonb5d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 9.5h2m-2 3h2");
}

.jt9wyzbdh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 15.25h.01");
}

.pp7fsrb1k {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.75H6.5m-3.75 6.5H6.5m11-6.5h3.75m-3.75 6.5h3.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="bwxp2jbki"/><rect class="bpqciuchf"/><path class="pp7fsrb1k"/><rect class="fnuhxvbeh"/><path class="j7ybonb5d"/><path class="jt9wyzbdh"/></g>`,
		"fallback": "iconoven:dmz-zone",
	});
}

export default Component;
