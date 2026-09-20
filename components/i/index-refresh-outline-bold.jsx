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
		"content": `<style>.b5ic9acln {
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
}

.f91x7e3em {
  d: path("M9 15v-5h6v5");
}

.lo21h71hs {
  d: path("M12.5 12.5 15 15l2.5 -2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="b5ic9acln"/><path class="f91x7e3em"/><path class="lo21h71hs"/></g>`,
		"fallback": "iconmind:index-refresh-outline-bold",
	});
}

export default Component;
