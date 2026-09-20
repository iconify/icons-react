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
		"content": `<style>.aryvw86tm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m16 16 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.biz7t_4gn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19 13v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c3wl0l-ou {
  d: path("M19 13v6");
}

.dkxdfrn3s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 7h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.vniunubej {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 13h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wlp3ibbib {
  d: path("M6 13h12");
}

.yhbiuccel {
  d: path("m16 16 3 3 3 -3");
}
</style><g class="hntgybcog"><path class="dkxdfrn3s"/><path class="vniunubej"/><path class="biz7t_4gn"/><path class="aryvw86tm"/><path class="ozi-k-boi"/><path class="wlp3ibbib"/><path class="c3wl0l-ou"/><path class="yhbiuccel"/></g>`,
		"fallback": "iconmind:funnel-drop-duotone-thin",
	});
}

export default Component;
