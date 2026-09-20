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
		"content": `<style>.b7h8iyqlm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 6h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hu2mwjewo {
  d: path("M12 6v10");
}

.k4qo1xe9v {
  d: path("M4 6h16");
}

.l46p6bckm {
  d: path("m8 20 4 -4 4 4");
}

.ownlczbmm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m8 20 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p2p_j61vf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 6v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pv52uob6b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 13h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zka_zabrc {
  d: path("M9 13h6");
}
</style><g class="hntgybcog"><path class="b7h8iyqlm"/><path class="p2p_j61vf"/><path class="ownlczbmm"/><path class="pv52uob6b"/><path class="k4qo1xe9v"/><path class="hu2mwjewo"/><path class="l46p6bckm"/><path class="zka_zabrc"/></g>`,
		"fallback": "iconmind:bar-stool-duotone-thin",
	});
}

export default Component;
