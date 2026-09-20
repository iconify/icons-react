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

.e0khk-b9n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 11v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ftrg70bds {
  d: path("M17 11v6");
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

.kf-dg5j1v {
  d: path("M12 2v9");
}

.kwbt03y-u {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 2v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lio8itbog {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 11h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ngex86bxe {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 11v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pwxki4zra {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 11v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rx24zrjxq {
  d: path("M7 11v6");
}

.s09hy0b0y {
  d: path("M7 11h10");
}
</style><g class="hntgybcog"><path class="kwbt03y-u"/><path class="lio8itbog"/><path class="e0khk-b9n"/><path class="pwxki4zra"/><path class="ngex86bxe"/><path class="hsnj9o-9y"/><path class="kf-dg5j1v"/><path class="s09hy0b0y"/><path class="rx24zrjxq"/><path class="acx2mjbnt"/><path class="ftrg70bds"/><path class="jkuojibnm"/></g>`,
		"fallback": "iconmind:gardening-duotone-thin",
	});
}

export default Component;
