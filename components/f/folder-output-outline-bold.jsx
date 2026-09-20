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

.fdrffh_te {
  d: path("M9 13h5");
}

.myd_nccmp {
  d: path("M12.5 10.5 15 13l-2.5 2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="bn_pu6j-z"/><path class="fdrffh_te"/><path class="myd_nccmp"/></g>`,
		"fallback": "iconmind:folder-output-outline-bold",
	});
}

export default Component;
