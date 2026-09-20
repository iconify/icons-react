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
		"content": `<style>.gzq8esb7v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 6h16");
  opacity: var(--svg-opacity--0-2, 0.2);
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

.qpuuxkb2r {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 13h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wnucdb_gy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 6v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zka_zabrc {
  d: path("M9 13h6");
}

.zlewc0iej {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m8 20 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="gzq8esb7v"/><path class="wnucdb_gy"/><path class="zlewc0iej"/><path class="qpuuxkb2r"/><path class="k4qo1xe9v"/><path class="hu2mwjewo"/><path class="l46p6bckm"/><path class="zka_zabrc"/></g>`,
		"fallback": "iconmind:bar-stool-duotone-bold",
	});
}

export default Component;
