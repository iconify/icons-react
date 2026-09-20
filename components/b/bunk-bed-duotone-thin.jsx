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
		"content": `<style>.ax5954b7h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 21v-7h18v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dkxdfrn3s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 7h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hdk8dzk2v {
  d: path("M3 21v-7h18v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.oti3l4bvo {
  d: path("M3 11V4h18v7");
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.qio1wsb9p {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 11V4h18v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ttx6bbv4v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 17h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="qio1wsb9p"/><path class="dkxdfrn3s"/><path class="ax5954b7h"/><path class="ttx6bbv4v"/><path class="oti3l4bvo"/><path class="ozi-k-boi"/><path class="hdk8dzk2v"/><path class="ic_pehd5a"/></g>`,
		"fallback": "iconmind:bunk-bed-duotone-thin",
	});
}

export default Component;
