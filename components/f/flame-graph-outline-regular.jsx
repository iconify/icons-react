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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oml_wvb5b {
  d: path("M7 5a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2");
}

.yyb29bl_l {
  d: path("M3 19a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2");
}

.zh3pv9siu {
  d: path("M5 12a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2");
}
</style><g class="nrj6p8qat"><path class="yyb29bl_l"/><path class="zh3pv9siu"/><path class="oml_wvb5b"/></g>`,
		"fallback": "iconmind:flame-graph-outline-regular",
	});
}

export default Component;
