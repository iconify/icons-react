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
		"content": `<style>.bkd9t9_ww {
  d: path("M3 21v-7h4V8h10v6h4v7Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uvgrx_yvv {
  d: path("M12 3v5");
}
</style><g class="nrj6p8qat"><path class="bkd9t9_ww"/><path class="uvgrx_yvv"/></g>`,
		"fallback": "iconmind:birthday-reward-outline-regular",
	});
}

export default Component;
