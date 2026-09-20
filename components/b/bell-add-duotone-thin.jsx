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
		"content": `<style>.acx2mjbnt {
  d: path("M12 11v6");
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

.ikiprn9sq {
  d: path("M9 14h6");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.pwxki4zra {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 11v6");
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

.z0jk47bno {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 14h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="u0jypcc9y"/><path class="hsnj9o-9y"/><path class="pwxki4zra"/><path class="z0jk47bno"/><path class="srzgk7jml"/><path class="jkuojibnm"/><path class="acx2mjbnt"/><path class="ikiprn9sq"/></g>`,
		"fallback": "iconmind:bell-add-duotone-thin",
	});
}

export default Component;
