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
		"content": `<style>.e4btx4zel {
  d: path("m21 15 -6 6");
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.rruu58b-y {
  d: path("m4 11 5 -5a3.5 3.5 0 0 1 5 5l-5 5a3.5 3.5 0 0 1 -5 -5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rruu58b-y"/><path class="kfdmhd64i"/><path class="e4btx4zel"/></g>`,
		"fallback": "iconmind:dose-missed-outline-bold",
	});
}

export default Component;
