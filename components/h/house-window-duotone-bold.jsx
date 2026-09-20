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
		"content": `<style>.a5tuk3h7e {
  d: path("M4 10h16");
}

.af3sztb6e {
  fill: currentColor;
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.cjsg0ab2y {
  d: path("M2 20h20");
}

.p52nwacub {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vc1mckb3d {
  d: path("M12 3v14");
}
</style><g class="s0phu2bbs"><path class="af3sztb6e"/><path class="p52nwacub"/><path class="vc1mckb3d"/><path class="a5tuk3h7e"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:house-window-duotone-bold",
	});
}

export default Component;
