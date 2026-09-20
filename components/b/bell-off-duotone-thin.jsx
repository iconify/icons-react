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
		"content": `<style>.eo60n2g2k {
  d: path("m6.5 6.5 10 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hsnj9o-9y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 20h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jkuojibnm {
  d: path("M3 20h18");
}

.m_vd2ph0r {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m6.5 6.5 10 10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.srzgk7jml {
  d: path("M3 17a9 9 0 0 1 18 0");
}

.u0jypcc9y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 17a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="u0jypcc9y"/><path class="hsnj9o-9y"/><path class="m_vd2ph0r"/><path class="srzgk7jml"/><path class="jkuojibnm"/><path class="eo60n2g2k"/></g>`,
		"fallback": "iconmind:bell-off-duotone-thin",
	});
}

export default Component;
