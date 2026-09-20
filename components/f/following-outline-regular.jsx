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
		"content": `<style>.ifsz0izyq {
  d: path("M12 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.j-rdw_bvv {
  d: path("M11 17a4 4 0 0 1 8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pf-zwj5ei {
  d: path("m6 10 2 2 -2 2");
}

.t1rg4fbhf {
  d: path("M3 12h5");
}
</style><g class="nrj6p8qat"><path class="ifsz0izyq"/><path class="j-rdw_bvv"/><path class="t1rg4fbhf"/><path class="pf-zwj5ei"/></g>`,
		"fallback": "iconmind:following-outline-regular",
	});
}

export default Component;
