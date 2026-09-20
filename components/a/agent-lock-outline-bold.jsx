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
		"content": `<style>.jz1duccjs {
  d: path("M8 12h8v4H8Z");
}

.qroz4tgom {
  d: path("M9.5 12a2.5 2.5 0 0 1 5 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}
</style><g class="s0phu2bbs"><path class="ugdbidcqi"/><path class="jz1duccjs"/><path class="qroz4tgom"/></g>`,
		"fallback": "iconmind:agent-lock-outline-bold",
	});
}

export default Component;
