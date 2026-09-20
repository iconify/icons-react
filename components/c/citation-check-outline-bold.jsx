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
		"content": `<style>.c4axibc2h {
  d: path("M8 3v4");
}

.fyea5htjc {
  d: path("M4 3v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uo9ro-b5p {
  d: path("m4 14 5 5L20 8");
}
</style><g class="s0phu2bbs"><path class="fyea5htjc"/><path class="c4axibc2h"/><path class="uo9ro-b5p"/></g>`,
		"fallback": "iconmind:citation-check-outline-bold",
	});
}

export default Component;
