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

.lh_8lcb-x {
  d: path("M12 4v6");
}

.lhk-ji-wo {
  d: path("M5 12v8h14v-8Z");
}

.t407nkbfi {
  d: path("m9 7 3 -3 3 3");
}
</style><g class="hntgybcog"><path class="lhk-ji-wo"/><path class="lh_8lcb-x"/><path class="t407nkbfi"/></g>`,
		"fallback": "iconmind:declutter-outline-thin",
	});
}

export default Component;
