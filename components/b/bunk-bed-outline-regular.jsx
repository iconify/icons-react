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
		"content": `<style>.hdk8dzk2v {
  d: path("M3 21v-7h18v7");
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oti3l4bvo {
  d: path("M3 11V4h18v7");
}

.ozi-k-boi {
  d: path("M3 7h18");
}
</style><g class="nrj6p8qat"><path class="oti3l4bvo"/><path class="ozi-k-boi"/><path class="hdk8dzk2v"/><path class="ic_pehd5a"/></g>`,
		"fallback": "iconmind:bunk-bed-outline-regular",
	});
}

export default Component;
