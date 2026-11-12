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
		"content": `<style>.dw81nibwn {
  d: path("M10 12.3115C10 7.31152 22 7.71152 22 15.3115");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.h_tsn8bxt {
  cx: 12px;
  cy: 12px;
  r: 2px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uo-6xxumw {
  d: path("M12 10C17 10 16.6 22 9 22");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.xak-bxbog {
  d: path("M12.3115 14C7.31152 14 7.71152 2 15.3115 2");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.yn9lyylvf {
  d: path("M14 12C14 17 2 16.6 2 9");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="uo-6xxumw"/><path class="xak-bxbog"/><path class="dw81nibwn"/><path class="yn9lyylvf"/></g>`,
		"fallback": "solar:black-hole-3-line-duotone",
	});
}

export default Component;
