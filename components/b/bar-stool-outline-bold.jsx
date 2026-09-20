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
		"content": `<style>.hu2mwjewo {
  d: path("M12 6v10");
}

.k4qo1xe9v {
  d: path("M4 6h16");
}

.l46p6bckm {
  d: path("m8 20 4 -4 4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zka_zabrc {
  d: path("M9 13h6");
}
</style><g class="s0phu2bbs"><path class="k4qo1xe9v"/><path class="hu2mwjewo"/><path class="l46p6bckm"/><path class="zka_zabrc"/></g>`,
		"fallback": "iconmind:bar-stool-outline-bold",
	});
}

export default Component;
