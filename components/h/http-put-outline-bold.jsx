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
		"content": `<style>.a9txaac_h {
  d: path("M12 10.5V16");
}

.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.j4d2337wb {
  d: path("m9.5 13 2.5 -2.5 2.5 2.5");
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.rjyodzkad {
  d: path("M9.5 7.5h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="rjyodzkad"/><path class="a9txaac_h"/><path class="j4d2337wb"/></g>`,
		"fallback": "iconmind:http-put-outline-bold",
	});
}

export default Component;
