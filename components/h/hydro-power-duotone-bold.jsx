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
		"content": `<style>.a9034eb-p {
  d: path("m14 8 -5 5h3l-4 4");
}

.fqvaanbwm {
  fill: currentColor;
  d: path("m12 4 8 8a8 8 0 0 1 -16 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lwmow_bne {
  d: path("m12 4 8 8a8 8 0 0 1 -16 0Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="fqvaanbwm"/><path class="lwmow_bne"/><path class="a9034eb-p"/></g>`,
		"fallback": "iconmind:hydro-power-duotone-bold",
	});
}

export default Component;
