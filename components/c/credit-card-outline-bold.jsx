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
		"content": `<style>.bgvwzkbqi {
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.i3ypschyz {
  d: path("M5 15h5");
}

.k187sabpz {
  d: path("M2 11h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="bgvwzkbqi"/><path class="k187sabpz"/><path class="i3ypschyz"/></g>`,
		"fallback": "iconmind:credit-card-outline-bold",
	});
}

export default Component;
