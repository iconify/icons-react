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
		"content": `<style>.b7rizdb8r {
  d: path("M9.5 8.5 12 11l-2.5 2.5");
}

.g00uv-b-x {
  d: path("M4 5h9a2 2 0 0 1 2 2v3h3.5l2.5 2.5V15a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j82qv6hym {
  d: path("M5.5 8.5 8 11l-2.5 2.5");
}

.k2mg4f2ls {
  d: path("M15 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.koh8ckbdb {
  d: path("M5 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="g00uv-b-x"/><path class="koh8ckbdb"/><path class="k2mg4f2ls"/><path class="j82qv6hym"/><path class="b7rizdb8r"/></g>`,
		"fallback": "iconmind:dropship-outline-thin",
	});
}

export default Component;
