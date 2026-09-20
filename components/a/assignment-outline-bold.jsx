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
		"content": `<style>.gwny-o4ct {
  d: path("M2 20V6h7l2 2h11v12Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tqskisbpb {
  d: path("M6 16h8");
}

.wlp3ibbib {
  d: path("M6 13h12");
}
</style><g class="s0phu2bbs"><path class="gwny-o4ct"/><path class="wlp3ibbib"/><path class="tqskisbpb"/></g>`,
		"fallback": "iconmind:assignment-outline-bold",
	});
}

export default Component;
