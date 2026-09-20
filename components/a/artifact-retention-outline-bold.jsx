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

.rknj6qbnf {
  d: path("M10 13h4l-4 4h4Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wzrnw0b2n {
  d: path("M14 6h3a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h3");
}
</style><g class="s0phu2bbs"><path class="wzrnw0b2n"/><path class="a5tuk3h7e"/><path class="rknj6qbnf"/></g>`,
		"fallback": "iconmind:artifact-retention-outline-bold",
	});
}

export default Component;
