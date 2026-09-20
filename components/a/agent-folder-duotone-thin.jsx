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

.hv_slxm8u {
  d: path("M12 12v9h10v-7h-5l-2 -2Z");
}

.nj_wxnzol {
  fill: currentColor;
  d: path("M12 12v9h10v-7h-5l-2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}
</style><g class="hntgybcog"><path class="nj_wxnzol"/><path class="skbifdbcx"/><path class="hv_slxm8u"/></g>`,
		"fallback": "iconmind:agent-folder-duotone-thin",
	});
}

export default Component;
