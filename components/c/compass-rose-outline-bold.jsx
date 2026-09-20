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
		"content": `<style>.ae-e09b3w {
  d: path("M3 12h18");
}

.h2-2dgnfu {
  d: path("M12 3v18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x6ma3nbxt {
  d: path("m12 3 9 9 -9 9 -9 -9Z");
}
</style><g class="s0phu2bbs"><path class="x6ma3nbxt"/><path class="h2-2dgnfu"/><path class="ae-e09b3w"/></g>`,
		"fallback": "iconmind:compass-rose-outline-bold",
	});
}

export default Component;
