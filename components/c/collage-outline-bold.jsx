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
		"content": `<style>.eoxa-cb-h {
  d: path("M9 9h11v11H9Z");
}

.q4t0ntb4q {
  d: path("M3 4h9v9H3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z67_1-j3c {
  d: path("M14 3h7v4");
}
</style><g class="s0phu2bbs"><path class="q4t0ntb4q"/><path class="eoxa-cb-h"/><path class="z67_1-j3c"/></g>`,
		"fallback": "iconmind:collage-outline-bold",
	});
}

export default Component;
