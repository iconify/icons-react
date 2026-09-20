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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t0-mwc0xy {
  d: path("M12 10v6");
}

.vj-1ubcjx {
  d: path("M4 20V7h16v13Z");
}

.zka_zabrc {
  d: path("M9 13h6");
}
</style><g class="hntgybcog"><path class="vj-1ubcjx"/><path class="t0-mwc0xy"/><path class="zka_zabrc"/></g>`,
		"fallback": "iconmind:hospital-outline-thin",
	});
}

export default Component;
