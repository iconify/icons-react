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
		"content": `<style>.g1ohqdvga {
  fill: currentColor;
  d: path("M14 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gmrzwr9af {
  d: path("M14 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nooweob_o {
  d: path("M3 10h12");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="hntgybcog"><path class="g1ohqdvga"/><path class="xgrfb-bqu"/><path class="nooweob_o"/><path class="gmrzwr9af"/></g>`,
		"fallback": "iconmind:attribution-duotone-thin",
	});
}

export default Component;
