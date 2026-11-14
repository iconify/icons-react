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

.olztc_beu {
  d: path("m8.557 3.419l4.609-.355a2.63 2.63 0 0 1 1.552.367L18.167 5.5a2.63 2.63 0 0 1 1.14 1.421l1.459 4.378a2.6 2.6 0 0 1 .068 1.421l-1.02 4.421a2.63 2.63 0 0 1-1.616 1.86l-4.561 1.754a2.6 2.6 0 0 1-1.313.148l-4.962-.708a2.63 2.63 0 0 1-1.977-1.425l-2.056-4.112a2.6 2.6 0 0 1-.268-1.392l.366-4.394a2.63 2.63 0 0 1 .654-1.526l2.715-3.054a2.63 2.63 0 0 1 1.761-.873");
}

.p16rhubqs {
  d: path("M6.5 13a5.5 4.5 0 1 0 11 0a5.5 4.5 0 1 0-11 0");
}

.pbxlcfxkr {
  d: path("m8 16l2-4.5l2 3l2-3.25L16 16");
}
</style><g class="hntgybcog"><path class="olztc_beu"/><path class="p16rhubqs"/><path class="pbxlcfxkr"/></g>`,
		"fallback": "uix:geode",
	});
}

export default Component;
