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

.j2f7om_-b {
  d: path("m16 15 3 3 3 -3");
}

.ucd51obdt {
  d: path("M19 6v12");
}

.ya3ccj28z {
  d: path("m8 4 4 4a5.5 5.5 0 1 1 -8 0Z");
}
</style><g class="hntgybcog"><path class="ya3ccj28z"/><path class="ucd51obdt"/><path class="j2f7om_-b"/></g>`,
		"fallback": "iconmind:cool-down-outline-thin",
	});
}

export default Component;
