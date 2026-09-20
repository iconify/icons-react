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
		"content": `<style>.a9bu8jb0n {
  d: path("m8 14 -5 5");
}

.epuxlmdaw {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-2dnzb7m {
  d: path("M12 14v6");
}

.ppgkbenpi {
  d: path("m16 14 5 5");
}

.tznr_wbsp {
  fill: currentColor;
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="tznr_wbsp"/><path class="epuxlmdaw"/><path class="a9bu8jb0n"/><path class="ppgkbenpi"/><path class="i-2dnzb7m"/></g>`,
		"fallback": "iconmind:easel-duotone-thin",
	});
}

export default Component;
