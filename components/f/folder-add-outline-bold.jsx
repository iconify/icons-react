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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t0-mwc0xy {
  d: path("M12 10v6");
}

.zka_zabrc {
  d: path("M9 13h6");
}
</style><g class="s0phu2bbs"><path class="bn_pu6j-z"/><path class="t0-mwc0xy"/><path class="zka_zabrc"/></g>`,
		"fallback": "iconmind:folder-add-outline-bold",
	});
}

export default Component;
