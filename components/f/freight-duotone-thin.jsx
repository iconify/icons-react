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

.nvlmbbb4n {
  fill: currentColor;
  d: path("M2 10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.o793-7bra {
  d: path("M17 10v6");
}

.t0-mwc0xy {
  d: path("M12 10v6");
}

.uyem4glxm {
  d: path("M2 10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.zhybnub4h {
  d: path("M7 10v6");
}
</style><g class="hntgybcog"><path class="nvlmbbb4n"/><path class="uyem4glxm"/><path class="zhybnub4h"/><path class="t0-mwc0xy"/><path class="o793-7bra"/></g>`,
		"fallback": "iconmind:freight-duotone-thin",
	});
}

export default Component;
