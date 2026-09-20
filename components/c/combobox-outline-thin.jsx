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
		"content": `<style>.fx8yhjh_u {
  d: path("M4 15h15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.myzclp8ci {
  d: path("M3 5a2 2 0 0 1 2 -2h15a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.r_r678bum {
  d: path("M6 7h6");
}

.wfw5phgmx {
  d: path("m15 6 2 2 2 -2");
}

.zceg_0atr {
  d: path("M4 20h15");
}
</style><g class="hntgybcog"><path class="myzclp8ci"/><path class="r_r678bum"/><path class="wfw5phgmx"/><path class="fx8yhjh_u"/><path class="zceg_0atr"/></g>`,
		"fallback": "iconmind:combobox-outline-thin",
	});
}

export default Component;
