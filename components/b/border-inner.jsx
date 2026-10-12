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
		"content": `<style>.cim1a2bwc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h.01M3 7.5h.01m-.01 9h.01M3 21h.01M7.5 3h.01M7.5 21h.01M16.5 3h.01m-.01 18h.01M21 3h.01M21 7.5h.01m-.01 9h.01M21 21h.01");
}

.jddzqsu_d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3v18m-9-9h18");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="cim1a2bwc"/><path class="jddzqsu_d"/></g>`,
		"fallback": "iconoven:border-inner",
	});
}

export default Component;
