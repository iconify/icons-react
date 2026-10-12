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
		"content": `<style>.fdczmrbou {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.75 7.5l2.526 1.01L16.5 7.25M9.75 10.5l1.571 3.536L14.25 15.5m-3 5.25h9m-6.75-3v3");
}

.kids5u0tk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 3h2.714l.686 2.4l1.35.6l.753.342l-.653.508l-1.2.9l.85 1.417V11.5c0 2.9-1.25 5.25-3.25 6.25h-4L8 21l-1.737 1.762L7 20.4L8.75 17l-1.1-1.833V12.5c0-3.9 2-6.5 4.3-7.9l.64-1.6z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vq5ph8i9x {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.25 5.25h.01");
}
</style><g class="ux2u0rbkq"><path class="kids5u0tk"/><path class="vq5ph8i9x"/><path class="fdczmrbou"/></g>`,
		"fallback": "iconoven:falcon-perch-sharp",
	});
}

export default Component;
